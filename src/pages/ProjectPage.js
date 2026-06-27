import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projectsData';
import '../css/styles.css';
import '../css/stylesforproject.css';

const mlProjects = projects.filter(p => p.type === 'ml');
const softwareProjects = projects.filter(p => p.type === 'software');

function ProjectCard({ project }) {
  return (
    <div
      onClick={() => window.open(project.link, '_blank')}
      style={{
        background: '#fff',
        border: '1px solid #e7e7e7',
        borderRadius: '10px',
        padding: '16px',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        transition: 'box-shadow 0.2s, transform 0.2s',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.1)';
        e.currentTarget.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {project.emoji
          ? <span style={{ fontSize: '22px' }}>{project.emoji}</span>
          : <img src={project.icon} alt="" style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
        }
        <span style={{ fontWeight: 700, fontSize: '13px' }}>{project.name}</span>
      </div>
      <p style={{ fontSize: '11px', color: '#666', lineHeight: '1.6', margin: 0 }}>
        {project.description}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginTop: 'auto' }}>
        {project.labels.map((l, j) => (
          <span key={j} style={{
            fontSize: '10px', color: '#266ea0', background: '#BADBF2',
            border: '0.8px solid #5599CA', borderRadius: '3px', padding: '2px 6px'
          }}>{l}</span>
        ))}
      </div>
    </div>
  );
}

function SectionHeading({ title, count }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px', marginTop: '32px' }}>
      <span style={{ fontWeight: 700, fontSize: '14px', color: '#222' }}>{title}</span>
      <span style={{ fontSize: '11px', color: '#999', background: '#f0f0f0', borderRadius: '10px', padding: '1px 8px' }}>{count}</span>
      <div style={{ flex: 1, height: '1px', background: '#eee' }} />
    </div>
  );
}

export default function ProjectPage() {
  return (
    <>
      <div className="topnav">
        <div className="topnavlink" style={{ width: 'auto' }}>
          <div className="linkBox">
            <Link to="/" style={{ textDecoration: 'none', color: '#333', fontSize: '13px' }}>Home</Link>
          </div>
        </div>
        <div className="topnavdetail">
          <div className="label label-tab">Projects</div>
        </div>
      </div>

      <div style={{ padding: '40px 24px 40px', maxWidth: '860px', margin: '0 auto' }}>

        <SectionHeading title="ML & AI" count={mlProjects.length} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' }}>
          {mlProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>

        <SectionHeading title="Software" count={softwareProjects.length} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '14px' }}>
          {softwareProjects.map((p, i) => <ProjectCard key={i} project={p} />)}
        </div>

      </div>
    </>
  );
}
