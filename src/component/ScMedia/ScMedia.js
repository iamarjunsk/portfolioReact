import React from "react";
import "./scMedia.css";
// import {Link} from 'react-router-dom'
function ScMedia(props) {
  return (
    <div className="scMedia">
      <div>
        <a href="https://github.com/iamarjunsk">
          <img
            src={require("./FAVPNG_social-media-github-logo_ccy5SwUs.png")}
            alt="GitHUb"
            srcSet=""
          />
          <i className="fab fa-github fa-2x"></i>
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/iamarjunsk/">
          <img
            src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
            alt=""
            srcSet=""
          />
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/arjun-s-7b8839b9/">
          <img
            src={require("./FAVPNG_linkedin-logo-business_ex0Ss4Gk.png")}
            alt="Linked in "
            srcSet=""
          />
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

export default ScMedia;
