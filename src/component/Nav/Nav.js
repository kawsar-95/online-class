import React from 'react';
import './Nav.css'

const Nav = ({  setKeyword }) => {
    const searchCourse = (e) => setKeyword(e.target.value);
    return (
        <div>
<nav className="navDesign">
<input 
            type="text"
            className="form-control w-100 m-auto"
            placeholder="Search Your Preferred Course"
            onChange={searchCourse}
          />
            
            </nav>  </div>
    );
};

export default Nav;