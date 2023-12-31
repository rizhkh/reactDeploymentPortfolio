import React from "react";


import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';
import instagram from '../img/instagram.png';
import git from '../img/git.png';
import ln from '../img/ln.png';

import Links from "../pages/Links";
import HeaderNameInfo from "../pages/HeaderNameInfo";
import HomeAboutMeStatement from "../pages/HomeAboutMeStatement";
import SkillStackClickAbleButtons from "../pages/SkillStack";
import SampleProjects from "../pages/SampleProjects";


export default function Home() {
  return<>
  <div class="topnav">
    <div class="topnavlink">
    <div class="linkBox">
        <a href="https://www.instagram.com/rizhkhan/"><img src={instagram} width="15" height="15" /></a>
      </div>

      <div class="linkBox">
      <a href="https://github.com/rizhkh"><img class="icons" src={git} width="15" height="15" /></a>
      </div>

      <div class="linkBox">
        <a href="https://www.linkedin.com/in/rizhkh/"><img src={ln} width="15" height="15" /></a> 
      </div>
    </div>
  </div>



  <br />

  <div className="mainCont">
  <div className="containDiv">
      <div className="placeDivSideBySide">
      <HeaderNameInfo />
      <HomeAboutMeStatement />
      <SkillStackClickAbleButtons />
    </div>

    <div className="placeDivSideBySide" style={{ padding: "2%", display: "inline-block",}}>
      <div style={{position: "relative"}}>
        <Links />
      </div>
      <br />  
      
      <div><SampleProjects /></div> 
    </div>
      
    </div>

  </div>

  {/* <div style={{ display: "flex",  flexDirection:"row", position: "relative"}}> 
    <div>
      <HeaderNameInfo />
      <HomeAboutMeStatement />
      <br />
      <SkillStackClickAbleButtons />
      <br/>
    </div>

    <div style={{ padding: "2%"}}>
      <div style={{position: "relative"}}>
        <Links />
      </div>
      <br />  
      
      <div><SampleProjects /></div> 
    </div>

  </div> */}
  
  </>;
}
