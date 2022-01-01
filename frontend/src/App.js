//import {useState} from 'react';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import IgersMiami from './pages/Igersmiami'
import Blog from './pages/Blog'
import Privacy from './pages/Privacy'
import Nav from './components/Nav'
import Contact from './pages/Contact'
import About from './pages/About'

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
	<Router>
	  <Switch>
	    <Route exact path="/blog#!" component={Blog} />
	    <Route exact path = "/" component={Home} />
	    <Route exact path = "/Privacy" component={Privacy} />
	    <Route exact path = "/Contact" component={Contact} />
	    <Route exact path = "/About" component={About} />
	  </Switch>
	</Router>
    </div>
  );
}

export default App;
