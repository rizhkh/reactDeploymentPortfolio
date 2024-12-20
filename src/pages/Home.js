import React from "react";
import { Link } from 'react-router-dom';

import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

import HeaderNameInfo from "../pages/HeaderNameInfo";
import HomeAboutMeStatement from "../pages/HomeAboutMeStatement";
import SkillsDisplay from '../pages/SkillStack';
import Project from '../pages/Project';

export default function Home() {
  return<>
  <div class="topnav">
  </div>

  <div className="mainCont"  style={{ maxWidth: '660px', margin: '0 auto' }}>
  <div className="containDiv">
      <HeaderNameInfo />
      <HomeAboutMeStatement />
    </div>
    <hr style={{ border: 'none', color: 'transparent', backgroundColor: 'transparent' }} />
    {/* <b>Work</b>
    <WorkTable />
    <br />
    <br /> */}

    <b>Tech I've Worked With</b>
    <br />
    <SkillsDisplay />
    <br />
    <br />
    <b>Projects</b>
    <br />
    <Project />
    <br />
    Click <span className="cool-effect" style={{fontStyle: "italic"}}>
    <Link to="/project_page" className="cool-effect" style={{ fontStyle: "italic" }}>
            Projects 
          </Link>
      </span> to see more...
    <br />
    <br />
    <br />
  </div>

  
  </>;
}
