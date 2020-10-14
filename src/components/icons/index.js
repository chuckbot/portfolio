import React from "react";
import IconGithub from "./Github";
import IconLinkedin from "./LinkedIn";
import IconTwitter from "./Twitter";
import IconExternal from "./External";

const Icon = ({ name, color }) => {
    switch (name.toLowerCase()) {
        case "github":
            return <IconGithub color={color} />;
        case "linkedin":
            return <IconLinkedin color={color} />; 
        case "twitter":
            return <IconTwitter color={color} />;
        case "external": 
            return <IconExternal color={color} />;     
        default:
            return null;
  }

}

export default Icon