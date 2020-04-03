import React from 'react';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faTwitter, faGooglePlusG, faYoutube} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
        <div className="Footer" id="footer">
            <p>Foody.</p>

            <FontAwesomeIcon icon={faYoutube} className="right" style={{border: "0.5px solid white", padding: "2px", margin: "10px"}}/>
            <FontAwesomeIcon icon={faGooglePlusG} className="right" style={{border: "0.5px solid white", padding: "2px", margin: "10px"}}/>
            <FontAwesomeIcon icon={faTwitter} className="right"  style={{border: "0.5px solid white", padding: "2px", margin: "10px"}}/>
            <FontAwesomeIcon icon={faFacebookF} className="right" style={{border: "0.5px solid white", padding: "2px", margin: "10px"}}/>
            <p className="right" style={{color: "#4AAB00"}}>Follow</p>
        </div>
  );
}

export default Footer;