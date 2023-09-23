import React, { useEffect, useState } from "react";


import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';
import fewProjects from "../project_min";
import instagram from '../img/instagram.png';
import git from '../img/git.png';
import ln from '../img/ln.png';

import Links from "../pages/Links";
import HeaderNameInfo from "../pages/HeaderNameInfo";
import HomeAboutMeStatement from "../pages/HomeAboutMeStatement";
import SkillStackClickAbleButtons from "../pages/SkillStack";

export default function Home() {
  return<>
  <div 
  style={{ display: "flex",  flexDirection:"row",
  position: "relative"}}
  > 

      <div>
      <HeaderNameInfo />
      <HomeAboutMeStatement />

      <br />
      <SkillStackClickAbleButtons />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      { FooterPage() }
      </div>


    <div style={{ 
  padding: "2%"
  }}>
    <div style={{ 
      backgroundColor: 'yellow',
      position: "relative"

    }}>


    <Links />

    </div>
    <br />
    
      {fewProjects()}
    </div>
  </div>
  </>;
}


function FooterPage()
{

return <>      
<footer style={{
  color: "black",
  padding: "10px",
  position: "absolute",
  bottom: "0",
  width: "100%"
  }}>

 ©2023 Rizwan 
<a href="https://www.instagram.com/rizhkhan/"><img src={instagram} width="27" height="27" /></a>
<a href="https://github.com/rizhkh"><img class="icons" src={git} width="27" height="27" /></a>
<a href="https://www.linkedin.com/in/rizhkh/"><img src={ln} width="27" height="27" /></a> 
</footer></>

}
