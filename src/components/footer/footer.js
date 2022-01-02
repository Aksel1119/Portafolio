import "./footer.css";

import React from 'react'
import Navbar from "../navbar/Navbar";

const footer = () => {
    const toTheTop=()=>{
        window.scrollTo({top:0,left:0,behavior:'smooth'})
      }

    return (
        <footer className="footer">
            <Navbar/>
            <div className="footer-info">
                <h1>Aksel Rivera Morales</h1>
                <p>Mexico city</p>
            </div>

            <div className="footer-contact">
                <h3>Contact me</h3>
                <p>And let's get down to work</p>
            </div>
            <div className="footer-sns">
                <div className="design-by">
                    <p> Aksel Developer</p>
                </div>
            <div className="sns-links">
                    <a href="https://www.linkedin.com/in/aksel-morales-8b7844209/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin linkedin"></i></a> 
                    <a href="https://www.instagram.com/aksel_rivera/" target="_blank" rel="noreferrer"><i className="fab fa-instagram instagram"></i></a> 
                    <a href="https://www.facebook.com/aksel.rivera/" target="_blank" rel="noreferrer"><i className="fab fa-facebook facebook"></i></a> 
                    <a onClick={toTheTop} href='/'><i className="fas fa-arrow-circle-up arrow"></i></a> 
                    
            </div>     
            
            </div>

        </footer>
    )
}

export default footer
