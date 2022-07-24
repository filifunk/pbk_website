import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'
import Privacy from './pages/Privacy'
import Bonuses from './pages/Bonuses'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
	<Route path="/" element={<App />} />
	<Route path="/blog" element={<Blog/>} />
	<Route exact path = "/" element={<Home/>} />
	<Route exact path = "/Contact" element={<Contact/>} />
	<Route exact path = "/About" element={<About/>} />
	<Route path="/Privacy" element={<Privacy/>} />
	<Route path="/Bonuses" element={<Bonuses/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// <React.StrictMode></React.StrictMode>
reportWebVitals();
