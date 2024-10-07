import React,{useState, useEffect} from "react";
import axios from 'axios';

const CourseContent = ({match}) => {
    const [course, setCourse] = useState(null);

    useEffect(()=> {
        const fetchCourseContent = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get(`http://localhost:3000/course-content/
                    ${match.params.id}`, {
                        headers: {Authorization: `Bearer ${token}`},
                    });
                    setCourse(response.data);
            } catch (error) {
                console.error('Error Fetching Course Content', error);
            }
        };
        fetchCourseContent();
    }, [match.params.id]);

    if (!course) {
        return <p>Loading...</p>
    }

    return (
        <div>
            <h1>
                {course.name}
            </h1>
            <p>
                {course.description}
            </p>
            <video src={course.videoUrl} controls />
        </div>
    );

};

export default CourseContent;