import React from "react";


import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

function SkillsDisplay(){
  const containerStyle = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  };


  return (
    <div style={containerStyle}>

      <div>
        <span style={{ marginRight: '10px',  color: '#565957' }}>Languages</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <br />
            <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
            <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
              src="https://cdn.iconscout.com/icon/free/png-512/free-python-2-226051.png"
              alt="Icon from iconscout.com" title="Python" /></div>

            <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
              <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
                src="https://cdn.iconscout.com/icon/free/png-512/free-java-60-1174953.png"
                alt="Icon from iconscout.com" title="Java" /></div>

            <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
              <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
                src="https://cdn.iconscout.com/icon/free/png-512/free-javascript-2752148-2284965.png"
                alt="Icon from iconscout.com" title="JavaScript" /></div>

            <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
              <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
                src="https://cdn.iconscout.com/icon/free/png-512/free-c-programming-569564.png"
                alt="Icon from iconscout.com" title="C" /></div>

        </div>  
      </div>

      
      <div>
        <span style={{ marginRight: '10px',  color: '#565957' }}>WebFrameworks & Databases</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <br />
            <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
            <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
              src="https://cdn.iconscout.com/icon/free/png-512/free-django-13-1175187.png"
              alt="Django" title="Django"/></div>

            <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
              <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
                src="https://img.icons8.com/?size=100&id=90519&format=png&color=000000"
                alt="Spring Boot" title="Spring Boot"/></div>

            <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
              <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
                src="https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=000000"
                alt="Flask" title="Flask" /></div>

            <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
              <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
                src="https://www.svgrepo.com/show/330413/fastapi.svg"
                alt="FastAPI" title="FastAPI" /></div>
                
                <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
    <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
      src="https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png"
      alt="React.js" title="React.js" /></div>

<div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
    <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
      src="https://cdn.iconscout.com/icon/free/png-512/free-postgresql-11-1175122.png"
      alt="PostgreSQL" title="PostgreSQL" /></div>

<div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
    <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
      src="https://cdn.iconscout.com/icon/free/png-512/free-mysql-19-1174939.png"
      alt="MySQL" title="MySQL" /></div>

<div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
    <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
      src="https://www.svgrepo.com/show/353901/influxdb.svg"
      alt="InfluxDB" title="InfluxDB" /></div>

<div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
    <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
      src="https://img.icons8.com/?size=100&id=39913&format=png&color=000000"
      alt="OracleDB" title="OracleDB" /></div>

        </div>  
      </div>
      



      <div>
        <span style={{ marginRight: '10px',  color: '#565957' }}>Server and Virtualization</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <br />
          <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
            <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
              src="https://cdn.iconscout.com/icon/free/png-512/free-aws-1869025-1583149.png"
              alt="AWS" title="AWS" />
          </div>

          <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
            <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
              src="https://cdn.iconscout.com/icon/free/png-512/free-node-js-1174925.png"
              alt="Node.js" title="Node.js" />
          </div>

          <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
            <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
              src="https://cdn.iconscout.com/icon/free/png-512/free-docker-226091.png"
              alt="Docker" title="Docker" />
          </div>
        </div>  
      </div>





      <div>
        <span style={{ marginRight: '10px',  color: '#565957' }}>Server and Virtualization</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
          <br />

    <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
      <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
        src="https://cdn.iconscout.com/icon/free/png-512/free-grafana-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-3-pack-logos-icons-2944910.png?f=webp&w=512"
        alt="Grafana" title="Grafana" />
    </div>
    <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
      <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
        src="https://cdn.iconscout.com/icon/free/png-512/free-git-225996.png"
        alt="Git" title="Git" />
    </div>
    <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
      <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
        src="https://cdn.iconscout.com/icon/free/png-512/free-jenkins-logo-icon-download-in-svg-png-gif-file-formats--brand-company-world-logos-vol-3-pack-icons-282385.png?f=webp&w=256"
        alt="Jenkins" title="Jenkins" />
    </div>
    <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
      <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
        src="https://cdn.iconscout.com/icon/free/png-512/free-concourse-3629020-3030001.png"
        alt="Concourse" title="Concourse" />
    </div>
    <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
        <svg style={{ objectFit: 'cover', height: "25px", padding: 2 }} alt="Material UI" title="Material UI"  xmlns="http://www.w3.org/2000/svg"  fill="none">
          <path fill="#0073E6" fill-rule="evenodd" 
          d="M24 5.601V1.592a.344.344 0 0 0-.514-.298l-2.64 1.508a.688.688 0 0 0-.346.597v4.009c0 .264.285.43.514.298l2.64-1.508A.688.688 0 0 0 24 5.6ZM.515 1.295l7.643 4.383a.688.688 0 0 0 .684 0l7.643-4.383a.344.344 0 0 1 .515.298v12.03c0 .235-.12.453-.319.58l-4.65 2.953 3.11 1.832c.22.13.495.127.713-.009l4.61-2.878a.344.344 0 0 0 .161-.292v-4.085c0-.254.14-.486.362-.606l2.507-1.346a.344.344 0 0 1 .506.303v7.531c0 .244-.13.47-.34.593l-7.834 4.592a.688.688 0 0 1-.71-.009l-5.953-3.681A.344.344 0 0 1 9 18.808v-3.624c0-.115.057-.222.153-.286l4.04-2.694a.688.688 0 0 0 .307-.572v-4.39a.137.137 0 0 0-.208-.117l-4.44 2.664a.688.688 0 0 1-.705.002L3.645 7.123a.138.138 0 0 0-.208.118v7.933a.344.344 0 0 1-.52.295L.5 14.019C.19 13.833 0 13.497 0 13.135V1.593c0-.264.286-.43.515-.298Z" clip-rule="evenodd"/></svg>
    </div>
    <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
      <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
        src="https://cdn.iconscout.com/icon/free/png-512/free-nexus-3629022-3030003.png"
        alt="Nexus" title="Nexus" />
    </div>
    <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
      <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
        src="https://cdn.iconscout.com/icon/free/png-512/free-prometheus-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-5-pack-icons-282488.png?f=webp&w=256"
        alt="Prometheus" title="Prometheus" />
    </div>
    <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
      <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
        src="https://cdn-images-1.medium.com/v2/resize:fit:851/1*nPcdyVwgcuEZiEZiRqApug.jpeg"
        alt="PySpark" title="PySpark" />
    </div>
    <div class="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
      <img style={{ objectFit: 'cover', height: "25px", padding: 2 }}
        src="https://www.svgrepo.com/show/354321/selenium.svg"
        alt="Selenium" title="Selenium" />
    </div>


        </div>  
      </div>


    </div>
  );
};

export default SkillsDisplay;