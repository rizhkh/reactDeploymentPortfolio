import {Link} from 'react-router-dom';
import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

export default function HomeAboutMeStatement(){
  return<>
<p className="paragraphFont" style={{width: '90%'}}>
  Hi, I'm Rizwan 👋 and i'm a <b style={{color: '#565957'}}>Full-Stack Engineer</b>.I like bringing
  ideas to life via <b style={{color: '#565957'}}>code</b> + <b style={{color: '#565957'}}>design</b>. I approach problem-solving with enthusiasm, backed by a strategic and analytical mindset. 
  My experience spans diverse domains, including back end, front end, Full-stack and 
  Artificial Intelligence.
  <br /><br />
  To get a closer look at some exciting projects I've done over the years and the technologies I've used 
  throughout my journey, I encourage you to check out my 
  <Link style={{color: "white", fontSize: "14px"}}  className="label Sun SB" to="/Projects">Projects</Link> page.
</p>
  </>;
}
