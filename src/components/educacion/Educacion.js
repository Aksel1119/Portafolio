import React from 'react'
import './educacion.css';
import logo from "../../media/descarga.png";

function Educacion() {
    return (
        <div className="about-container3">
              <div className="custom-shape-divider-top-1637180662-edu">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
                    </svg>
                </div>


           <h3 id="eduTitle">Education</h3>

            <div className= {`about-desc3 `}>
           
            <div className="card2">
                <center><img
                  src={logo}
                  className="card-img-top2 img2"
                  alt="..."
                />
                </center>
                
                <div className="card-body2">
                  <h5 className="card-title">Universidad Victoria</h5>
                  <p className="card-text edu-title"> Computerstystems engineer. <br/> September 2018 - December 2021</p>
                  <p className="card-text"> Associations:
                 
                  <>
                                            <ul>
                                                <li>Quick learning</li>
                                                <li>Cisco networking Academy</li>
                                                <li>Microsoft technology associate</li>    
                                            </ul> 
                  </>                          
                    
                    </p>
                </div>

                </div>
                

               

            </div>
            

        </div>
    )
}

export default Educacion
