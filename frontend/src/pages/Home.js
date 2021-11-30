import logo from '../pbk_053121_WhiteBg.svg';
import Form from '../components/Form';
import SocialFollow from '../components/SocialFollow';
import '../App.css';



function Home() {

return(
  <div className="App">
      <header className="App-header">
	<img src={logo} className="App-logo" alt="logo" />
	<h1>Coming Soon...</h1>
	<h3>submit email for updates</h3>
	<Form/>
	<h3>blog hello</h3>
	<SocialFollow />

      </header>

</div>

  );
}

export default Home;
