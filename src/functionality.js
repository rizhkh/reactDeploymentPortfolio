import './css/styles.css';
import './css/stylesforproject.css';
import './css/hovereffect.css';
import fewProjects from "./project_min";
import aboutInfoShort from "./aboutinfo";
import dp from './img/0.jpg'


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
      I'm a Software Engineer based out of Greater New York City Area. 
      I graduated from 
      <a style={{color: "white", fontSize: "14px"}} className="label rt Rutgers" href="https://www.rutgers.edu/">Rutgers University</a> with a 
      degree in Computer Science.
      I love learning and working with new open source technologies, and I am particularly interested in full-stack, backend and AI.
      Please check out my 
      <a style={{color: "white", fontSize: "14px"}}  className="label Sun SB" href="projects.html">Projects</a>
      page for some of the cool stuff I've built over the years and technologies I've used building them.
      </p>
      <br />
      {clickAbleButtons()}
      </div>


    <div style={{ 
  padding: "2%"
  }}>
      <div style={{justifyContent:'right'}}>
      <a style={{ color: "black", fontSize: "14px", display: 'inline', padding: "0.3em 0.6em 0.2em", textAlign: "center", borderRadius: "0.65em", backgroundColor: "#eee", fontFamily: "Cuprumm, sans-serif", textDecoration: "none"}} 
  href="https://www.rutgers.edu/">Projects</a>

  <a style={{color: "black", fontSize: "14px", margin: 15, display: 'inline', padding: "0.3em 0.6em 0.2em", textAlign: "center", borderRadius: "0.65em", backgroundColor: "#eee", fontFamily: "Cuprumm, sans-serif",textDecoration: "none"}} 
  href="https://www.rutgers.edu/">Resume</a>
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