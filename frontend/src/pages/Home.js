import logo from '../pbk_053121_WhiteBg.svg';
import Form from '../components/Form';
import SocialFollow from '../components/SocialFollow';
import Nav from '../components/Nav';
import '../App.css';
import { Link } from 'react-router-dom';


function Home() {

return(

  <div className="App">
	  
      <body className="App-body">
	<img src={logo} className="App-logo" alt="logo" />
	<h1>Coming Soon...</h1>
	<h3>submit email for updates</h3>
	<Form/>
	<SocialFollow />



      </body>

	<div className="App-nav">
	<Nav />
	</div>


</div>

  );
}

export default Home;
