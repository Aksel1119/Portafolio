import './App.css';
import React,{ useState, useEffect} from 'react';
import Cover from "./components/cover/Cover";
import Navbar from './components/navbar/Navbar';
import About from './components/about/about';
import Proyects from './components/proyects/Proyects';
import Info from "./components/info/info";
import Footer from "./components/footer/footer";
import ShowSkill from './components/skill/ShowSkill';
import Educacion from './components/educacion/Educacion';
import Experiencia from './components/experiencia/Experiencia';


function App() {
  
const [scrollHeight, setScrollHeight]=useState(0);

const handleScroll=()=>{
  const position= window.pageYOffset;
  setScrollHeight(position);
};

useEffect(()=>{
  window.addEventListener("scroll",handleScroll)
},[scrollHeight])

  return (

 <div className="App">

   <Navbar color={scrollHeight<100? "#57DEAE":"#000000"}/>
    <Cover/>
    <About isScrolling={scrollHeight}/>
    <ShowSkill isScrolling={scrollHeight}/>
    <Educacion/>
    <Experiencia/>
    <Proyects/>
    <Info/>
    {scrollHeight<=100? '':<Footer/> }
    
  </div>
  );
}

export default App;
