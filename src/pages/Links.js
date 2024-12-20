import React from "react";
import {Link} from 'react-router-dom';


import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';


export default function Links() {
  return<>
    <div style={{padding: "1%", position: "absolute", left:0, width: '100%'}}>

          <Link to="/Projects" style={{color: "white", fontSize: "14px", 
          boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.3)"}}  
        className="label Sun SB">Projects</Link>
      {/* <a style={{color: "white", fontSize: "14px", boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}  
      className="label Sun SB" href="projects.html">
        Resume
        </a> */}
      <a style={{color: "white", fontSize: "14px", 
      boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.3)"}}  
      className="label Sun SB" href="mailto:rizhkh@gmail.com">
        Lets Talk!
        </a>
    </div>
  </>
}