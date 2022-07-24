import Hamburger from "./Hamburger";
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Nav(){

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
	setHamburgerOpen(!hamburgerOpen)
    }
    console.log(hamburgerOpen)


    let navigate = useNavigate();

    function about() {
	navigate('/About')

    }

    function blog() {
	navigate('/Blog')

    }

    function contact() {
	navigate('/Contact')

    }





    return(
	    <div className="navigation">
		    	<div className="hamburger" onClick={toggleHamburger}>
				<Hamburger isOpen={hamburgerOpen}/>
			</div> 

			    <ul>
				    <li><a href="/About" onclick='about()'>About</a></li>
				    <li><a href="/Blog" onclick='blog()'>Blog</a></li>
				    <li><a href="/Contact" onclick='contact()'>Contact us</a></li>

			    </ul>


		    <style jsx>{`

			.navigation{
			    display: grid;
			    grid-column-start:4;
			    float: right;
			    grid-row-start: -1

			}
			

			.navigation ul{
			    display: ${hamburgerOpen ? 'inline': 'none'};
			    text-align: right;
			}

			.navigation ul li {
			    list-style-type: none;
			    font-size: 2em
			}





		    `}</style>
		</div>
    )

}
