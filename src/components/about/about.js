import React from "react";
import "./about.css";
import "animate.css";
import imgen from "../../media/desarrollo-web.png";
//import ScrollReveal from 'scrollreveal'

const about = ({isScrolling}) => {

  
   // ScrollReveal().reveal('.about-img');

    return (
       
        
        <div className="about-container" id="about-container" >
            <h3>About me</h3>
             {/* <img className="fondo" src={fondoimg} autoPlay loop muted alt='' /> */}
           {/* {`about-desc ${isScrolling>100 ?"about-desc animate__animated  animate__slideInLeft":null}`} */}
            <div className="about-desc" >
           <div className='about-text'>
                <p>I'm Aksel Rivera a systems engineering. I like to always stay updated and learn new technologies, perfect my programming logic, find faulty programs to give them a solution and develop the graphical environment of applications.</p>
                </div>

                <div className="about-img ">
                <img src={imgen} alt="about"></img>
            </div>
            </div>
           

        </div>
      
        
        
    )

}

export default about
