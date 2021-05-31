import logo from './pbk_053121_WhiteBg.svg';
//import {useState} from 'react';
import './App.css';
import Form from './components/Form';


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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
	<h1>Coming Soon</h1>
	<Form/>

      </header>
    </div>
  );
}

export default App;
