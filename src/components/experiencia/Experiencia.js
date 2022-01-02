import React from "react";
import "./experiencia.css";
import "animate.css";
//import ScrollReveal from 'scrollreveal'
import imagen from '../../media/avu.png';
const Experiencia = ({isScrolling}) => {

  
   // ScrollReveal().reveal('.about-img');

    return (
        
        <div className="exp-container">
           <div className="custom-shape-divider-top-1637180662-exp">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
              
           <h3 id="exTitle">Experience</h3>

            <div className= {`exp-desc `}>
           
            <div className="card exp-card">
                <img
                  src={imagen}
                  className="card-img-top exp-img"
                  alt="..."
                />
                <div className="card-body exp-body">
                  <h5 className="card-title">AVU - HUB DE INNOVACIÓN</h5>
                  <p className='exp-title'>Abril 2021 - Octubre 2021</p>
                  <p className="card-text">
                    <>
                    <ul>
                      <li>Development of systems for the association</li>
                      <li>Home page customization</li>
                      <li>Database managment</li>
                      <li>Train new members</li>
                      </ul>
                    </>
                  </p>
                  <p></p>
                </div>

                </div>
               

               

            </div>
            

        </div>
        
        
    )

}

export default Experiencia
