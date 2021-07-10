import React from 'react';
import './Do.css';

function Do() {
    return (
        <div className="what-i-do">
        <div className="details">
               <h4>Front End Developer</h4>
               <p>Front-end web development, also known as client-side development is the practice of producing HTML, CSS and JavaScript for a website or Web Application so that a user can see and interact with them directly. The challenge associated with front end development is that the tools and techniques used to create the front end of a website change constantly and so the developer needs to constantly be aware of how the field is developing.</p>
           </div> 
           <div className="skills">
               <h5>SKILLS</h5>
               <ul className="skill-list">
                   <li>HTML5</li>
                   <li>CSS3</li>
                   <li>JavaScript</li>
                   <li>React JS</li>
               </ul>
           </div>
        </div>
    );
}

export default Do;