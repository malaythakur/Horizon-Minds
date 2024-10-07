import React from "react";
import { useParams } from "react-router-dom";

const courseDetailsData = {
    1: {
        course_name: "Real-Time Data Streaming",
        syllabus: "Learn about Kafka Architecture, Use Kafkajs with Node.js",
        instructor_bio: "John Doe is a seasoned Kafka Expert",
        prerequisites: "A little bit of Node.js Knowledge, and your laptop, yes, just that ..."
    },

    2: {
        course_name: "Create React App with webpack",
        syllabus: "Enhance your app, advanced state management",
        instructor_bio: "Jane Smith is a leading React Developer...",
        prerequisites: "No preq. Let's just dive in..."
    },

    3: {
        course_name: "Learn about Terraform in details",
        syllabus: "Learn to create CI/CD pipelines, Automate the deployment process",
        instructor_bio: "Mike Johnson has over 10 years of Terraform Experience...",
        prerequisites: "Just you and you Laptop"
    },

    4: {
        course_name: "Learn in depth about kubernetes",
        syllabus: "Create Clusters, Learn the intricacies of K8s",
        instructor_bio: "Emily Davis has build numerous Full Stack Application",
        prerequisites: "A basic knowledge about Node.js. Just that"
    },

    5: {
        course_name: "Create your first own server less web app",
        syllabus: "Use various AWS products like: S3, EC2, and many more...",
        instructor_bio: "Chris Wilson is a AWS Guru",
        prerequisites: "AWS account..."

    }
};

const CourseDetails = () => {
    const { id } = useParams();
    const courseDetails = courseDetailsData[id];

    if(!courseDetails){
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100 mt-36">
                Loading
            </div>
        );
    }

    return (
        <div className="container mx-auto flex items-center justify-center rounded-lg"> 
            <div className="mt-36 w-full bg-style bg-[#001313] p-8 shadow-md shadow-green-300/35 rounded-lg">
                <h2 className="text-3xl text-gray-100 font-bold mb-6 text-center">
                    {courseDetails.course_name}
                </h2>
                <div className="mb-8">
                    <h3 className="text-2xl text-gray-100 font-semibold mb-4">
                        What will be Covered ?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        {courseDetails.syllabus}
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="text-2xl  text-gray-200 font-semibold mb-4">
                        Who is the Instructor ?
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                        {courseDetails.instructor_bio}
                    </p>
                </div>
                <div className="mb-8">
                    <h3 className="text-2xl text-gray-200 font-semibold mb-4">
                        What are Prerequisites ? 
                    </h3>

                    <p className="text-gray-300 leading-relaxed">
                        {courseDetails.prerequisites}         
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;