import React, { useEffect, useState } from "react";


import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';


export default function SkillStackClickAbleButtons()
{
  return <>      
  <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap'}}> 

    <div class="btnlabel btn btn-5" 
    style={{ boxSizing: "border-box",display: "flex", justifyContent: "center", alignItems: "center"}}>
        <img   style={{ objectFit: 'cover',height:"35px",width:"35px",padding: 2}}
        src="https://cdn.iconscout.com/icon/free/png-512/free-aws-1869025-1583149.png?f=avif&w=256" 
        alt="Icon from iconscout.com" title="AWS"/>
    </div> 

    <div class="btnlabel btn btn-5" 
    style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center"}}>
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