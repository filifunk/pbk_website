import Hamburger from "./Hamburger";
import { useState } from 'react';

export default function Nav(){

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () =>{
	setHamburgerOpen(!hamburgerOpen)
    }
    console.log(hamburgerOpen)

    return(
	    <div className="navigation">
		    	<div className="hamburger" onClick={toggleHamburger}>
				<Hamburger isOpen={hamburgerOpen}/>
			</div> 

			    <ul>
				    <li><a href="/About">About</a></li>
				    <li><a href="/Blog#!">Blog</a></li>
				    <li><a href="/Contact">Contact us</a></li>

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
