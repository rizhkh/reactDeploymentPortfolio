import {Link} from 'react-router-dom';
import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

export default function HomeAboutMeStatement(){
  return<>
    <div className="blockPos blockPosFont">
      <p className="paragraphFont" style={{width: '95%'}}>
        Hi, I'm Rizwan 👋 and I am a 
        
        <i> <b className='headerFont' style={{color: '#565957', fontSize:19}}>Full-Stack Engineer</b></i>.
        I like bringing
        ideas to life using 
        <Link style={{color: "white", fontSize: "16px"}}  
        ><i> <b className='headerFont' style={{color: '#565957', fontSize:19}}>
        <text style={{fontSize:14}}>&lt; </text>
          code 
        <text style={{
          fontSize:12
        }}> + </text> 
        design
        <text style={{fontSize:14}}> &gt;</text></b></i></Link>
        <br />
        I approach problem-solving with enthusiasm, backed by a strategic and analytical mindset. 
        My experience spans diverse domains, including back end, front end, Full-stack and 
        Artificial Intelligence.
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
