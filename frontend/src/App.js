//import {useState} from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import IgersMiami from './pages/Igersmiami'
import Blog from './pages/Blog'

function App() {

  /*
  const [results, setResults] = useState([])


  const submittedResults = (result) => {
    const new_results = [...results, result]
    setResults(new_results)

  }

*/



  return (
    <div>
	<h1>Hi</h1>
	    <nav>
		    <ul>
			    <li><a href="/blog">Blog</a></li>
		    </ul>
	    </nav>
	<Router>
	  <Switch>
	    <Route exact path="/blog" component={Blog} />
	  </Switch>
	</Router>
    </div>
  );
}

export default App;
