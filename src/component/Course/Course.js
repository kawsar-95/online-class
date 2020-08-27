import React from 'react';
import './Course.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartArrowDown} from '@fortawesome/free-solid-svg-icons'



const Course = (props) => {
   const {courseName,instructor,price,duration,picture}=props.courseDescription;
   const handleAddCourse=props.handleAddCourse;
   

    return (
      

        <div className="card col-lg-3 col-md-6 text-white bg-dark mb-4 ml-3 course-card" >
        <div className="card-header"><h3>{courseName}</h3></div>
        <div className="card-body">
            <img className="img-responsive course-image" src={picture} alt=""></img>
            
      <h5 className="card-title"><strong>Instructor:</strong> {instructor}</h5>
      <h5 className="card-title"><strong>Duration:</strong> {duration}</h5>
      <h5 className="card-title"><strong>Price:</strong> ${price}</h5>
      <button onClick={()=>handleAddCourse(props.courseDescription)} className="btn addButton"><span>Enroll Now</span> <FontAwesomeIcon icon={ faCartArrowDown} /></button>
      
      
        </div> </div>
    );
};

export default Course;