//import {useState} from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import About from './pages/About'

function App() {



  return (
    <div>
	<Router>
	  <Switch>
	    <Route exact path="/blog" component={Blog} />
	    <Route exact path = "/" component={Home} />
	    <Route exact path = "/Contact" component={Contact} />
	    <Route exact path = "/About" component={About} />
	  </Switch>
	</Router>
    </div>
  );
}

export default App;
