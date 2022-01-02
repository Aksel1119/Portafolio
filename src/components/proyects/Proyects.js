import React from "react";
import "./Proyects.css";
import "animate.css";
//import ScrollReveal from 'scrollreveal'
import proyecto1 from '../../media/SuperChat.png';
import proyecto2 from '../../media/Unichat.png';

const Proyects = ({isScrolling}) => {

  
   // ScrollReveal().reveal('.about-img');

    return (
        
        <div className="about-container2">
            <div className="custom-shape-divider-top-1637180662-proy">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>
              
           <h3 id="pjTitle">Projects</h3>

            <div className= {`about-desc2 `}>
           
            <div className="card">
                <img
                  src={proyecto1}
                  className="card-img-top proyecto1-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">SuperChat</h5>
                  <p className="card-text">
                  Creation of a group chat with storage in firebase and Google authentication, developed with React JS
                  </p>
                  <a href="https://superchat-176ce.web.app/" target="_blank"  rel="noreferrer" className="btn btn-outline-primary btn-rounded">SuperChat App</a>
                </div>

                </div>

                <div className="card">
                <img
                  src={proyecto2}
                  className="card-img-top proyecto2-img"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">UniChat</h5>
                  <p className="card-text">
                  Creation of a communication application inspired by Messenger or WhatsApp developed with React JS
                  </p>
                  <a href="https://unichat-fd80d.web.app/" target="_blank"  rel="noreferrer"  className="btn btn-outline-primary btn-rounded">UniChat App</a>
                </div>
                </div>

                

               

            </div>
            

        </div>
        
        
    )

}

export default Proyects
