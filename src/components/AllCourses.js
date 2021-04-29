import React, { useState, useEffect } from "react";
import base_url from "./../app/bootapi";
import Course from "./Course";

import axios  from "axios";

const AllCourses=()=>{

    useEffect(() => {
        document.title = "All course";

    },[]);

    // function to call server
    const getAllCoursesFromServer=()=>{
        axios.get(`${base_url}/courses`).then(
               (response)=>{
                   console.log(response);
               },
               (error)=>{
               console.log(error); 
               } 
        );  
    };

    useEffect(() => {
        getAllCoursesFromServer();
    },[]);

    const [courses,setCourses]=useState([
        {id:"1", title:"Django Course", desc:"This is Djnago course, useful for web development"},
        {id:"2", title:"Java ,Course", desc:"This is Java course, useful for various web & API development"},
        {id:"3", title:"React Js Course", desc:"This is React course, useful for single page development"},
        {id:"4", title:"Angular Js Course", desc:"Dynamic web development framework"},
    ]);

    return (
        <div className="text-center">
            <h1 >All Courses</h1>

            <p>List of courses are captured below:</p>
            
            {courses.length > 0 
                ? courses.map((item) => <Course key={item.id} course={item} />)
                : "No Course"}
        </div>

    );
};

export default AllCourses;