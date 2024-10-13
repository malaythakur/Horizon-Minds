const stripe = require("../services/stripeClient");
const { initializeConnection } = require("../config/database");

const checkPurchasedCourses = async (userId, courseIds) => {
    try {
        const connection = await initializeConnection();
        const query = `SELECT course_id FROM purchased_courses WHERE user_id = ? AND course_id
        IN (${courseIds.map(() => '?').join(',')})`;
        const params = [userId, ...courseIds];

        console.log("Exchange query: ", query);
        console.log("With Parameters: ", params);

        const [results] = await connection.query(query, params);
        console.log("Purchased Courses: ", results); // ADD LOGGIN HERE
        return results.map(result => result.course_id);
    } catch (err) {
        console.error("Error Checking Purchased Courses:", err);
        throw new Error("Error Checking Purchased Courses");
    }
};

const storeItems = new Map([
    [1, {priceInCents: 3000, name: "Learn About Kafka and Node.js"}],
    [2, {priceInCents: 2000, name: "React, but with Webpack"}],
    [3, {priceInCents: 2000, name: "Learn About Terraform in Depth"}],
    [4, {priceInCents: 3000, name: "Kubernetes and Docker for Deployment"}],
    [5, {priceInCents: 4000, name: "Create your own Serverless web app"}],
]);

exports.createCheckoutSession = async (req, res) => {
    try {
        console.log("User Object: ", req.user); // ADD Logging here

        const userId = req.user.id;
        if(!userId) {
            throw new Error("User ID is not defined. Ensure the user is autheticated.");
        }

        const courseIds = req.body.items.map((item) => item.id);

        //Check if any of the selected Courses have already have been purchased
        const purchasedCourseIds = await checkPurchasedCourses(userId, courseIds);

        console.log("Purchased Course IDs:", purchasedCourseIds); // Add Loggin here

        if (purchasedCourseIds.length > 0) {
            return res.status(400).json({
                message: `You have already purchased courses with IDs: ${purchasedCourseIds.join(",")}`,
                purchasedCourseIds,
            });
        }

        const lineItems = req.body.items.reduce((acc, item) => {
            const storeItem = storeItems.get(item.id);
            if(!storeItem) {
                console.error(`Item with id ${item.id} not found`);
                return acc;
            }
            acc.push({
                price_data: {
                    currency: "usd",
                    product_data: {
                        name: storeItem.name,
                    },
                    unit_amount: storeItem.priceInCents,
                },
                quantity: item.quantity,
            });
            return acc;
        }, []);

        if (lineItems.length === 0){
            throw new Error("No valid items found for checkout.");
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            mode: "payment",
            line_items: lineItems,
            success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}&
            course_id=${JSON.stringify(courseIds)}`,
            cancel_url: `${process.env.CLIENT_URL}/cancel`,
        });

        res.json({url: session.url});
    } catch (e) {
        console.error("Error creating checkout session:", e.message);
        res.status(500).json({error: e.message});
    }
};