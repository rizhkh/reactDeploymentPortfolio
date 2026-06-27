import React from "react";
import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

function SkillIcon({ name, src }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '3px 2px' }}>
      <div className="btnlabel btn btn-5" style={{ boxSizing: "border-box", display: "flex", justifyContent: "center", alignItems: "center", width: "35px" }}>
        <img style={{ objectFit: 'contain', height: "22px", padding: 2 }} src={src} alt={name} title={name} />
      </div>
      <span style={{ fontSize: '8px', color: '#565957', textAlign: 'center', marginTop: '2px', maxWidth: '40px', lineHeight: '1.1' }}>{name}</span>
    </div>
  );
}

const skillCategories = [
  {
    label: "Languages",
    skills: [
      { name: "Python",     src: "https://cdn.iconscout.com/icon/free/png-512/free-python-2-226051.png" },
      { name: "Java",       src: "https://cdn.iconscout.com/icon/free/png-512/free-java-60-1174953.png" },
      { name: "JavaScript", src: "https://cdn.iconscout.com/icon/free/png-512/free-javascript-2752148-2284965.png" },
      { name: "C",          src: "https://cdn.iconscout.com/icon/free/png-512/free-c-programming-569564.png" },
    ]
  },
  {
    label: "ML & Data",
    skills: [
      { name: "pandas",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" },
      { name: "NumPy",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" },
      { name: "scikit-learn", src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
      { name: "Matplotlib",   src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/matplotlib/matplotlib-original.svg" },
      { name: "Jupyter",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jupyter/jupyter-original.svg" },
    ]
  },
  {
    label: "Frameworks & Databases",
    skills: [
      { name: "Django",     src: "https://cdn.iconscout.com/icon/free/png-512/free-django-13-1175187.png" },
      { name: "Spring Boot",src: "https://img.icons8.com/?size=100&id=90519&format=png&color=000000" },
      { name: "Flask",      src: "https://img.icons8.com/?size=100&id=MHcMYTljfKOr&format=png&color=000000" },
      { name: "FastAPI",    src: "https://www.svgrepo.com/show/330413/fastapi.svg" },
      { name: "React",      src: "https://cdn.iconscout.com/icon/free/png-512/free-react-1-282599.png" },
      { name: "PostgreSQL", src: "https://cdn.iconscout.com/icon/free/png-512/free-postgresql-11-1175122.png" },
      { name: "MySQL",      src: "https://cdn.iconscout.com/icon/free/png-512/free-mysql-19-1174939.png" },
      { name: "InfluxDB",   src: "https://www.svgrepo.com/show/353901/influxdb.svg" },
      { name: "OracleDB",   src: "https://img.icons8.com/?size=100&id=39913&format=png&color=000000" },
    ]
  },
  {
    label: "Server & Virtualization",
    skills: [
      { name: "AWS",    src: "https://cdn.iconscout.com/icon/free/png-512/free-aws-1869025-1583149.png" },
      { name: "Node.js",src: "https://cdn.iconscout.com/icon/free/png-512/free-node-js-1174925.png" },
      { name: "Docker", src: "https://cdn.iconscout.com/icon/free/png-512/free-docker-226091.png" },
    ]
  },
  {
    label: "Miscellaneous Tools",
    skills: [
      { name: "Grafana",     src: "https://cdn.iconscout.com/icon/free/png-512/free-grafana-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-3-pack-logos-icons-2944910.png?f=webp&w=512" },
      { name: "Git",         src: "https://cdn.iconscout.com/icon/free/png-512/free-git-225996.png" },
      { name: "Jenkins",     src: "https://cdn.iconscout.com/icon/free/png-512/free-jenkins-logo-icon-download-in-svg-png-gif-file-formats--brand-company-world-logos-vol-3-pack-icons-282385.png?f=webp&w=256" },
      { name: "Concourse",   src: "https://cdn.iconscout.com/icon/free/png-512/free-concourse-3629020-3030001.png" },
      { name: "Material UI", src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" },
      { name: "Nexus",       src: "https://cdn.iconscout.com/icon/free/png-512/free-nexus-3629022-3030003.png" },
      { name: "Prometheus",  src: "https://cdn.iconscout.com/icon/free/png-512/free-prometheus-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-5-pack-icons-282488.png?f=webp&w=256" },
      { name: "PySpark",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apachespark/apachespark-original.svg" },
      { name: "Selenium",    src: "https://www.svgrepo.com/show/354321/selenium.svg" },
    ]
  },
];

function SkillsDisplay() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '8px' }}>
      {skillCategories.map((category, i) => (
        <div
          key={i}
          style={{
            border: '1px solid #e7e7e7',
            borderRadius: '6px',
            padding: '14px',
            background: '#fafafa',
            ...(i === skillCategories.length - 1 && skillCategories.length % 2 !== 0 ? { gridColumn: '1 / -1' } : {})
          }}
        >
          <div style={{ fontWeight: '600', fontSize: '12px', color: '#333', marginBottom: '8px' }}>
            {category.label}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
            {category.skills.map((skill, j) => (
              <SkillIcon key={j} name={skill.name} src={skill.src} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsDisplay;
