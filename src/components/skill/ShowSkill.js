import React from 'react'
import Skill from './Skill';
import './Skill';
import "animate.css";

function ShowSkill(isScrolling) {
    return (
        <div className='skill-show'  >
             <div className="custom-shape-divider-top-1637180662-skill">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>

              <h3  id="skillTitle">Skills</h3>

            <div className="skillsContainer" >
                <Skill icon={<i className="fab fa-js-square"></i>} Skill={'Javascript'} progress={'80%'} />   
                <Skill icon={<i className="fab fa-react"></i>} Skill={'React'} progress={'65%'} />   
                <Skill icon={<i className="fas fa-database"></i>} Skill={'SQL Server'} progress={'90%'} />   
                <Skill icon={<i className="fas fa-database"></i>} Skill={'MySQL'} progress={'85%'} />   
                <Skill icon={<i className="fab fa-java"></i>} Skill={'JAVA'} progress={'85%'} />   
                <Skill icon={<i className="fab fa-php"></i>} Skill={'PHP'} progress={'70%'} />   
                {/* <Skill icon={<i className="fab fa-angular"></i>} Skill={'Angular'} progress={'0%'} />    */}
                <Skill icon={<i className="fas fa-file-code"></i>} Skill={'HTML & CSS'} progress={'95%'} />   
            </div>
        </div>
    )
}

export default ShowSkill
