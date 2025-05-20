import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Website/pagess/Home";
import About from "./Website/pagess/About";
import Menu from "./Website/pagess/Menu";
import Chef from "./Website/pagess/Chef";
import Feature from "./Website/pagess/Feature";
import Testimonial from "./Website/pagess/Testimonial";
import Contact from "./Website/pagess/Contact";
import Not from "./Website/pagess/Not";
import BlogsMan from "./Admin/Apages/Blogsman";
import Blogadd from "./Admin/Apages/Blogadd";
import Dashb from "./Admin/Apages/Dashb";
import Blog from "./Website/pagess/Blog";


function App() {
  return (
       <BrowserRouter>
       
       <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/menu" element={<Menu/>} />
            <Route path="/team" element={<Chef/>} />
            <Route path="/feature" element={<Feature/>} />
            <Route path="/test" element={<Testimonial/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/blog" element={<Blog/>} />

            <Route path="*" element={<Not/>}/>

            <Route path="/dashboard" element={<Dashb/>}/>
            <Route path="/blogmanage" element={<BlogsMan/>}/>
            <Route path="/blogadd" element={<Blogadd/>}/>

       </Routes>

       </BrowserRouter>
  );
}

export default App;
