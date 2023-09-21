import './css/styles.css';
import './css/stylesforproject.css';
import './css/hovereffect.css';
import fewProjects from "./project_min";
import aboutInfoShort from "./aboutinfo";
import dp from './img/0.jpg'
import instagram from './img/instagram.png';
import git from './img/git.png';
import ln from './img/ln.png';

import {Link } from "react-router-dom";
  
  import projectPage from "./projectPage";

const aboutMeStatement =  function() {
  return<>
  <div 
  style={{ display: "flex",  flexDirection:"row",
  position: "relative"}}
  // style={{ 
  //   display: "flex",
  //   flexWrap: "wrap",
  //   justifyContent: "flex-start",
  //   alignItems: "center",
  // }}
  > 

      <div>
      {aboutInfoShort()}
      
      <p className="paragraphFont">

      I'm a Full-Stack Engineer located in the Greater New York City Area. 
      I approach problem-solving with enthusiasm, backed by a strategic and analytical mindset. 
      My experience spans diverse domains, including Backend development, Full-stack, Data, and Artificial Intelligence.
      <br /><br />

      My passion for software is a driving force, and I thrive on continuous learning, particularly when it involves embracing cutting-edge open-source technologies. Currently, I am actively expanding my expertise in full-stack development and AI.
      <br /><br />
      To get a closer look at the exciting projects I've undertaken and the technologies I've harnessed throughout my journey, I encourage you to explore my <a style={{color: "white", fontSize: "14px"}}  className="label Sun SB" href="projects.html">Projects</a> page.

      </p>
      <br />
      {clickAbleButtons()}
      <footer style={{
            color: "black",
            padding: "10px",
            position: "fixed",
            bottom: "0",
            width: "100%"
            }}>
        ©2023 Rizwan 
        <a href="https://www.instagram.com/rizhkhan/"><img src={instagram} width="27" height="27" /></a>
          <a href="https://github.com/rizhkh"><img class="icons" src={git} width="27" height="27" /></a>
          <a href="https://www.linkedin.com/in/rizhkh/"><img src={ln} width="27" height="27" /></a>  
    </footer>
      </div>


    <div style={{ 
  padding: "2%"
  }}>
      <div style={{justifyContent:'right', padding: "1%"}}>
      {/* <Link to="/page2"> */}
      <a 
        style={{
        color: "white", 
        fontSize: "14px",  
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}  
        className="label Sun SB" href="projects.html">Projects</a>
        {/* </Link> */}
      <a 
        style={{
        color: "white", 
        fontSize: "14px",  
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}  
      className="label Sun SB" href="projects.html">Resume</a>
            <a 
        style={{
        color: "white", 
        fontSize: "14px",  
        boxShadow: "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px"}}  
      className="label Sun SB" href="projects.html">Lets Talk!</a>

      </div>
      {fewProjects()}
    </div>
  </div></>;
}

function clickAbleButtons()
{
  return <>      <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap'}}> 
  <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box",display: "flex", justifyContent: "center", alignItems: "center"}}>
  <img   style={{ objectFit: 'cover',height:"35px",width:"35px",padding: 2}}
  src="https://cdn.iconscout.com/icon/free/png-512/free-aws-1869025-1583149.png?f=avif&w=256" 
  alt="Icon from iconscout.com" title="AWS"/>
  </div> 

  <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", width: '95px', display: "flex", justifyContent: "center", alignItems: "center"}}>
  <img style={{ objectFit: 'cover',height:"35px",width:"35px",padding: 2}}
  src="https://img.icons8.com/?size=512&id=qV-JzWYl9dzP&format=png" 
  alt="Icon from icons8.com" 
  title="Django" />
  </div> 

  <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box",display: "flex", justifyContent: "center", alignItems: "center", width: '120px'}}>
  <img style={{ objectFit: 'cover',height:"35px", padding: 2}}
      src="https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" 
      alt="Icon from docker.com"
      title="Docker"
  />
  </div> 

  <div class="btnlabel btn btn-5" style={{ display: "flex", justifyContent: "center", alignItems: "center", 
  width: '100px'}}>
  <img style={{ objectFit: 'cover',height:"27px", padding: 2}}
    src="https://git-scm.com/images/logos/1color-orange-lightbg@2x.png" 
    alt="Icon from git-scm.com" 
    title="Git" 
  />
  </div> 

  <div class="btnlabel btn btn-5" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
  <img style={{ objectFit: 'cover',height:"35px",width:"35px",padding: 2}}
    src="https://static-00.iconduck.com/assets.00/influxdb-icon-505x512-a944pejj.png" 
    alt="Icon from iconduck.com" 
    title="InfluxDB from InfluxData" 
  />
  </div> 

  <div class="btnlabel btn btn-5" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
  <img style={{ objectFit: 'cover',height:"35px",width:"35px",padding: 2}}
    src="https://cdn.iconscout.com/icon/free/png-512/free-jenkins-1-282385.png?f=avif&w=256" 
    alt="Icon from iconscout.com" 
    title="Jenkins"  
  />
  </div> 

  <div class="btnlabel btn btn-5" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
  <img style={{ objectFit: 'cover',height:"35px",width:"35px",padding: 2}}
    src="https://cdn.iconscout.com/icon/free/png-512/free-postgresql-11-1175122.png?f=avif&w=256"
    alt="Icon from iconscout.com" 
    title="Postgresql" 
  />

  </div> 

  <div class="btnlabel btn btn-5" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
  <img style={{ objectFit: 'cover',height:"35px",width:"35px",padding: 2}}
    src="https://cdn.iconscout.com/icon/free/png-512/free-react-3-1175109.png?f=avif&w=256" 
    alt="Icon from iconscout.com" 
    title="React" 
  />
  </div> 

  <div class="btnlabel btn btn-5" style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>
  <img style={{ objectFit: 'cover',height:"35px",width:"35px",padding: 2}}
    src="https://img.icons8.com/?size=512&id=90519&format=png" 
    alt="Icon from icons8.com" 
    title="SpringBoot" 
  />
  </div> 

</div></>
}

export default aboutMeStatement;