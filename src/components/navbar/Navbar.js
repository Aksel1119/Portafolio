// import React from 'react';
// import "./Navbar.css";


// const Navbar = ({isScrolling=0}) => {
//   //isScrolling
//   //funcion para subir pagina
// // const toTheTop=()=>{
// //   window.scrollTo({top:0,left:0,behavior:'smooth'})
// // }

//     return (
//       <>
//        {/* <nav classNameNameName={`navbar ${isScrolling>100000 ? "scrolling":null}`}>
//         <div classNameNameName="navbar-logo" onClick={toTheTop}>
//         Aksel Developer
//         </div>

//         <div classNameNameName='navbar-text' id="home">
  //           <a href='#about-container'>About</a> 
  //           <a href='#skillTitle'>Skills</a> 
  //           <a href='#eduTitle'>Education</a> 
  //           <a href='#exTitle'>Experience</a> 
  //           <a href='#pjTitle'>Projects</a> 

//         </div>
//       </nav> */}

//       </>
//     )
// }

// export default Navbar

import React, { useState } from 'react';
  import {
    MDBNavbar,
    MDBContainer,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
    MDBIcon,
    MDBNavbarNav,
  } from 'mdb-react-ui-kit';

export default function Navbar(color) {
  const [showNavNoToggler, setShowNavNoToggler] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' dark style={{ backgroundColor: {color}}} >
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarTogglerDemo01'
            aria-controls='navbarTogglerDemo01'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavNoToggler(!showNavNoToggler)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={showNavNoToggler}>
          <MDBNavbarBrand tag="span" className='mt-5 px-2 h1'>Aksel Developer</MDBNavbarBrand>

            <MDBNavbarNav className='mt-5'>
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#about-container'>
                  About
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#skillTitle'>
                  Skill
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#eduTitle'>
                  Education
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#exTitle'>
                  Experience
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink active aria-current='page' href='#pjTitle'>
                  Projects
                </MDBNavbarLink>
              </MDBNavbarItem>
             
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}