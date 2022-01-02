import React from 'react'
import "./Cover.css";
import cv from '../../media/CV.pdf';
//import fondoimg from "../../media/fondo.svg";
//import Typical from 'react-typical';
const Cover = () => {
    return (
        <div className="cover-container">
            
            {/* <video className="fondo" src={fondoimg} autoPlay loop muted></video> */}
           
            <h1>Aksel Rivera Morales</h1>
            <p>Web Developer | Systems Engineering | Enthusiastic Developer</p>
           {/* <span>  {""}
            <Typical

                            loop={2}
                          
                            steps={[
                                "Web Developer",1000,
                                "Enthusiastic Developer",1000,
                                "React Developer",1000,
                                "Sistems Engineering",1000
                                
                        ]}
                            
                    /> 
                         
            </span>   */}
            
            <a className='pdf'  href={cv} download="Aksel Rivera CV.pdf">
             <button
                            type="button"
                            className="btn btn-outline-light btn-rounded pdf"
                            data-mdb-ripple-color="dark"
                            >
                               Download CV
                            </button>  
            </a>           

        </div>
    )
}

export default Cover

//rafce crear componente