import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="py-5 text-center">
      <a href="https://github.com/ICristian01" target="_blank">
        <FontAwesomeIcon icon={faGithub} size="2x" className="p-5" />
      </a>
      <a href="https://www.linkedin.com/in/cristian-ionescu-61b7a7234/" target="_blank">
        <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="p-5"/>
      </a>
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} Cristian Ionescu. All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
