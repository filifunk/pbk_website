import logo from '../pbk_053121_WhiteBg.svg';
import Form from '../components/Form';
import SocialFollow from '../components/SocialFollow';
import '../App.css';
import { Link } from 'react-router-dom';


function Home() {

return(
  <div className="App">
      <header className="App-header">
	<img src={logo} className="App-logo" alt="logo" />
	<h1>Coming Soon...</h1>
	<h3>submit email for updates</h3>
	<Form/>
	<h2>blog</h2>
	<h3>Hi all!</h3>
	<ul>
	    <li>
		    <Link to="/blog">blog</Link>
	    </li>
	</ul>
	<SocialFollow />

      </header>

</div>

  );
}

export default Home;
