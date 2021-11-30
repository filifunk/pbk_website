//import {useState} from 'react';
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
    <div className="App">
	<Router>
	  <Switch>
	    <Route exact path="/">
	      <Home />
	    </Route>
	    <Route path="/blog" component={Blog} />
	  </Switch>
	</Router>
	</div>
  );
}

export default App;
