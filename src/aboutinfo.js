import './css/styles.css';
import './css/stylesforproject.css';
import './css/hovereffect.css';
import instagram from './img/instagram.png';
import git from './img/git.png';
import ln from './img/ln.png';


const aboutInfoShort =  function() {
  return <><table style= {{width:"100%"}}>
  <tr>
  <td>
    <tr>                  
    <h1 style={{ fontFamily: "Open Sans,sans-serif", paddingBottom: "6px", 
    margin: "5px 0 20px", borderBottom: "3px solid #eee", width: '100%'}}>
    Hi, I'm Rizwan 👋 
    </h1>
    </tr>
  <tr>
  {/* <a href="https://www.instagram.com/rizhkhan/"><img src={instagram} width="27" height="27" /></a>
          <a href="https://github.com/rizhkh"><img class="icons" src={git} width="27" height="27" /></a>
          <a href="https://www.linkedin.com/in/rizhkh/"><img src={ln} width="27" height="27" /></a>   */}

  </tr>
  </td>
  </tr>
</table></>;
}

export default aboutInfoShort;