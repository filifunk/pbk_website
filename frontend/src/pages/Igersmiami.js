import logo from '../pbk_053121_WhiteBg.svg';
import IgersForm from '../components/IgersForm';
import SocialFollow from '../components/SocialFollow';
import '../App.css';


function IgersMiami() {

  return(
    <div className="App">
	<header className="App-header">
	  <img src={logo} className="App-logo" alt="logo" />
	  <h1>RSVP for @igersmiami table at June 29th @ship2shorefl show at The Miami Improv!</h1>
	  <h3>See you there!</h3>
	  <IgersForm/>
	</header>
	    <SocialFollow />
      </div>
  );
}

export default IgersMiami;
