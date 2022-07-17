import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="social-container">
	<h3>Social Follow</h3>
	<a href="http://www.facebook.com/pobblebonklive/"
	  className="facebook social">
	  <FontAwesomeIcon icon={faFacebook} size="2x" />
	</a>
	<a href = "http://www.instagram.com/pobblebonklive"
	  className="instagram social">
	  <FontAwesomeIcon icon={faInstagram} size="2x" />
	</a>
    </div>


  );

}
