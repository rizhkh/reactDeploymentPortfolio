import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projectsData';
import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';

const FILTERS = [
  { label: 'All',       value: 'all' },
  { label: 'Software',  value: 'software' },
  { label: 'ML & AI',   value: 'ml' },
];

export default function ProjectPage() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? projects : projects.filter(p => p.type === filter);

  return (
    <>
      <div className="topnav">
        <div className="topnavlink">
          <div className="linkBox">
            <Link to="/">Home</Link>
          </div>
        </div>
        <div className="topnavdetail">
          <div className="label label-tab">Projects</div>
        </div>
      </div>
      <div style={{ padding: '20px' }}>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {FILTERS.map(f => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              style={{
                padding: '4px 12px',
                fontSize: '12px',
                border: '1px solid #ccc',
                borderRadius: '4px',
                cursor: 'pointer',
                background: filter === f.value ? '#565957' : 'transparent',
                color: filter === f.value ? '#fff' : '#565957',
                transition: 'background 0.15s, color 0.15s',
              }}
            >
              {f.label}
            </button>
          ))}
        </div>
        <div className="projects-container">
          {filtered.map((project, index) => (
            <div className="project-box" key={index} onClick={() => window.open(project.link, "_blank")}>
              <div className="project-title">
                {project.emoji && (
                  <span style={{ fontSize: '28px', marginRight: '10px', verticalAlign: 'middle', lineHeight: 1 }}>{project.emoji}</span>
                )}
                {!project.emoji && project.icon && (
                  <img src={project.icon} alt={`${project.name} icon`} style={{ width: '40px', height: '40px', marginRight: '10px', verticalAlign: 'middle' }} />
                )}
                {project.name}
              </div>
              {project.result && (
                <div style={{ fontSize: '11px', color: '#2e7d32', fontWeight: '600', margin: '4px 0' }}>
                  {project.result}
                </div>
              )}
              <div className="project-description" style={{ fontSize: '12px' }}>{project.description}</div>
              <div className="project-labels">
                {project.labels.map((label, idx) => (
                  <div className="label label-System" key={idx}>{label}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
