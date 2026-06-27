import React from "react";
import { Link } from 'react-router-dom';

import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

import HeaderNameInfo from "../pages/HeaderNameInfo";
import HomeAboutMeStatement from "../pages/HomeAboutMeStatement";
import SkillsDisplay from '../pages/SkillStack';
import Project from '../pages/Project';

const scrollTo = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const SERVICES = [
  {
    title: "Full-Stack",
    icon: "🖥️",
    description: "End-to-end systems from data pipelines to analytics, real-time monitorin platforms",
    tags: ["backend", "frontend-UI", "microservices", "developer-tooling", "database","pipelines","analytics"]
  },
  {
    title: "AI & ML",
    icon: "🤖",
    description: "Intelligent agents, classifiers, autonomous systems, EDA, and predictive modeling.",
    tags: ["RAG", "context engineering", "Inference", "modeling","NLP & LLMs", "GenAI"]
  },
  {
    title: "Infrastructure & DevOps",
    icon: "⚙️",
    description: "CI/CD pipelines, containerization, and cloud deployment"
  },
];

export default function Home() {
  return <>
    <div className="topnav">
      <div className="topnavlink" style={{ width: 'auto' }}>
        <div className="linkBox">
          <a href="#about"    onClick={scrollTo('about')}    style={{ textDecoration: 'none', color: '#333', fontSize: '13px' }}>About</a>
        </div>
        <div className="linkBox">
          <a href="#skills"   onClick={scrollTo('skills')}   style={{ textDecoration: 'none', color: '#333', fontSize: '13px' }}>Skills</a>
        </div>
        <div className="linkBox">
          <Link to="/project_page" style={{ textDecoration: 'none', color: '#333', fontSize: '13px' }}>Projects</Link>
        </div>
      </div>
    </div>

    <div className="mainCont" style={{ maxWidth: '760px', margin: '0 auto', flexDirection: 'column', alignItems: 'flex-start' }}>

      <div id="about" style={{ scrollMarginTop: '40px', width: '100%' }}>
        <div className="containDiv">
          <HeaderNameInfo />
          <HomeAboutMeStatement />
        </div>
      </div>

      <hr style={{ border: 'none', color: 'transparent', backgroundColor: 'transparent' }} />

      <div id="skills" style={{ scrollMarginTop: '40px', width: '100%' }}>
        <b>Skills</b>
        <br />
        <SkillsDisplay />
        <br />
        <br />
      </div>

      <div id="services" style={{ scrollMarginTop: '40px', width: '100%' }}>
        <b>What I Do</b>
        <br />
        <br />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
          {SERVICES.map((s) => (
            <div key={s.title} style={{
              border: '1px solid #e7e7e7',
              borderRadius: '6px',
              padding: '16px',
              background: '#fafafa',
            }}>
              <div style={{ fontSize: '22px', marginBottom: '6px' }}>{s.icon}</div>
              <div style={{ fontWeight: '600', fontSize: '13px', marginBottom: '6px' }}>{s.title}</div>
              <div style={{ fontSize: '12px', color: '#565957', lineHeight: '1.6' }}>{s.description}</div>
              {s.tags && (
                <div style={{ marginTop: '10px', display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {s.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: '10px', color: '#555', background: '#efefef', borderRadius: '3px', padding: '2px 6px' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <br />
        <br />
      </div>

      <div id="projects" style={{ scrollMarginTop: '40px', width: '100%' }}>
        <b>Projects</b>
        <br />
        <Project />
        <br />
        Click{' '}
        <Link to="/project_page" className="cool-effect" style={{ fontStyle: 'italic' }}>
          Projects
        </Link>
        {' '}to see more...
        <br />
        <br />
        <br />
      </div>

    </div>
  </>;
}
