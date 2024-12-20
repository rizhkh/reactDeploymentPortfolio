import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function HeaderNameInfo(){
  return <>
  <table style= {{width:"100%"}}>
    <tr>
      <td>
        <h1 class="headerOne headerFont" >
          <text style={{ borderBottom: "3px solid #eee"}} >
            <text style={{fontSize:38}}>R</text>
            <text style={{fontSize:35}}>izwan</text>
            <text style={{fontSize:38}}> K</text>
            <text style={{fontSize:35}}>han</text>
          <text style={{fontSize:8}}> @ </text>
          <text style={{fontSize:16, color: '#565957'}}> Engineer</text>
          </text>
          <br />
          
          <IconButtons />
        </h1>
      </td>
    </tr>
  </table>
  </>;
}


const IconButtons = () => {
  return (
    <div className="icon-buttons">
      <a href="mailto:rizhkh@gmail.com" className="icon-button">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a href="https://github.com/rizhkh" target="_blank" rel="noopener noreferrer" className="icon-button">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://www.linkedin.com/in/rizhkh/" target="_blank" rel="noopener noreferrer" className="icon-button">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="icon-button">
      <FontAwesomeIcon icon={faXTwitter} />
      </a> */}

      <div className="icon-button-location" >
       <text style={{fontSize:12, color: '#565957'}}>📍</text><text style={{fontSize:12, color: '#565957'}}> New York, NY 🌎</text>
      </div>

    </div>
  );
}