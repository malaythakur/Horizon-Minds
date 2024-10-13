const { initializeConnection } = require("../config/database");

exports.getCourseDetails = async (req, res) => {
    const courseId = req.params.id;
    const sql = "SELECT * FROM courses WHERE id = ?";

    try {
        const connection = await initializeConnection();
        const [results] = await connection.query(sql, [courseId]);
        if(results.length === 0) {
            res.status(404).send("Course Not Found");
        }
        else {
            res.json(results[0]);
        }
    } catch (error) {
        console.error("Error Fetching Course Details", error);
        res.status(500).send("Error Fetching Course Details");
    }
};