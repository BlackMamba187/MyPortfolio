import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { RecoilRoot } from "recoil";
import Footer from "./Components/Footer/Footer";


import Navbar from "./Components/Navbar/Navbar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import ProjectInfo from "./Pages/Projects/ProjectInfo";
import Projects from "./Pages/Projects/Projects";
import Skills from "./Pages/Skills/Skills";

const App = () => {
	return (
    <RecoilRoot>
		<BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path='/' element={< Home/>} />
        <Route path='/about' element={< About/>}  />
        <Route path='/contact' element={< Contact/>}  />
        <Route path='/projects' element={< Projects/>}  />
        <Route path='/projects/:ID' element={< ProjectInfo/>}  />
        <Route path='/skills' element={< Skills/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </RecoilRoot>
	);
};

export default App;
