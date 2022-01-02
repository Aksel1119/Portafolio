import React from 'react'
import './Skill.css';


function Skill({icon,Skill, progress}) {
    return (
        <div className='SkillSection'>
            
        <div className='skill-container'>
            <h5 className='skill-tittle'> <span className='icono'>{icon}</span> {Skill}</h5>

            <div className='skill-bar'>
                <p className='skill-text'>{progress}</p>

                <div className='skill-progress' >
                    <div className='progress'>
                        <div className='inner-progress' style={{width:progress}}></div>
                    </div>

                </div>
            </div>
        </div>

        </div>
    )
}

export default Skill
