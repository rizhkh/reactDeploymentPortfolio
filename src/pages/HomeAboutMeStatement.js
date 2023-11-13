import {Link} from 'react-router-dom';
import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

export default function HomeAboutMeStatement(){
  return<>
    <div className="blockPos blockPosFont">
      <p className="paragraphFont" style={{width: '95%'}}>
        Hi, I'm Rizwan 👋 and I am a 
Full-Stack Engineer.
        I like bringing
        ideas to life using  
        code.

        <br /><br />
        Please check out my 
        <Link to="/Projects" style={{color: "white", fontSize: "16px", 
          boxShadow: "0px 0px 3px rgba(0, 0, 0, 0.3)"}}  
        className="label Sun SB">Projects</Link>page for some of the cool stuff I've built over the years and technologies I've used building them.
      </p>
    <br />
    <br />
      </div>
  </>
}