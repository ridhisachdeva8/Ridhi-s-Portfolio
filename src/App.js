import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import AboutMe from './components/AboutMe';
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
   <BrowserRouter>
   <Navbar/>
<Routes>
<Route exact path="/" element={<AboutMe/>}></Route>  
<Route exact path="/resume" element={<Resume/>}></Route> 
<Route exact path="/projects" element={<Projects/>}></Route> 
<Route exact path="/contact" element={<Contact/>}></Route> 
</Routes>
      </BrowserRouter>
   
    </>
  );
}

export default App;
