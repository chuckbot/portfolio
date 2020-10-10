import React from "react";
import IconGithub from "./Github";
import IconLinkedin from "./LinkedIn";
import IconTwitter from "./Twitter";

const Icon = ({ name, color }) => {
    switch (name.toLowerCase()) {
        case "github":
            return <IconGithub color={color} />
        case "linkedin":
            return <IconLinkedin color={color} /> 
        case "twitter":
            return <IconTwitter color={color} />       
        default:
            return null
  }

}

export default Icon