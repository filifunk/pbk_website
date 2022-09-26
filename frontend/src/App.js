//import {useState} from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import Legal from './pages/Legal'
import Tos from './pages/Tos'
import Pp from './pages/Pp'

function App() {



  return (
    <div>
	  <Routes>
		  <Route path="/blog" element={<Blog/>} />
		  <Route exact path = "/" element={<Home/>} />
		  <Route exact path = "/Contact" element={<Contact/>} />
		  <Route exact path = "/About" element={<About/>} />
		  <Route exact path = "/Legal" element={<Legal/>} />
		  <Route exact path = "/Tos" element={<Tos/>} />
		  <Route exact path = "/Pp" element={<Pp/>} />
		  
	</Routes>
    </div>
  );
}

export default App;
