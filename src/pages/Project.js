import React, { useState } from 'react';
import '../css/styles.css';
import '../css/stylesforproject.css';
import '../css/hovereffect.css';


const ExpandableSection = ({ org, pos, colorway, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ borderBottom: '1px dashed #ccc', padding: '2px' }}>
      <div 
        onClick={toggleSection} 
        style={{ 
          cursor: 'pointer', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}
      >
        <div style={{ display: 'flex', gap: '20px', color: 'black' }}>
          <span>
            <div className={colorway}>
              {org}
            </div>
          </span>
          <span>{pos}</span>
        </div>
        <span>
          {isOpen ? '⌃' : '⌄'}
        </span>
      </div>
      {isOpen && (
        <div style={{ marginTop: '5px', backgroundColor: isOpen ? '#f1f1f4' : 'transparent', borderRadius: '7px' }}>
          <div style={{ margin: '0', padding: 4 }}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

// export default ExpandableSection;

// export default function WorkTable(){
  export default function Project(){
  return <>
  <div >

  <ExpandableSection org={
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src="https://cdn.iconscout.com/icon/premium/png-512-thumb/minesweeper-1616681-1377688.png?f=webp&w=256" alt="Minesweeper AI Agent icon" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
    Autonomous Minesweeper Agent
  </div>
}>
  <p style={{ fontSize: '13px', margin: '0', padding: 4 }}>
    Autonomous Minesweeper agent using propositional logic inference, deterministic constraint rules, and probabilistic tracking to execute optimal, risk-mitigated moves without any human input.
  </p>
  <br />
</ExpandableSection>

  <ExpandableSection org={
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <span style={{ fontSize: '20px', marginRight: '10px', lineHeight: 1 }}>📈</span>
    Quantitative Forecasting Engine
  </div>
}>
  <p style={{ fontSize: '13px', margin: '0', padding: 4 }}>
    Quantitative stock forecasting system using analog pattern matching (KNN) and ML models — XGBoost, LightGBM, and Random Forest with quantile regression to generate price ranges and direction signals.
  </p>
  <br />
</ExpandableSection>

<ExpandableSection org={
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src="https://img.icons8.com/?size=100&id=KgWXEuIORpk7&format=png&color=000000" alt="navigator" style={{ width: '20px', height: '20px', marginRight: '10px' }} />
    Navigator
  </div>
}>
  <p style={{ fontSize: '13px', margin: '0', padding: 4 }}>
  Designed an AI agent that is capable of navigating a 2D grid world using a combination of A* search and reinforcement learning. 
      The agent is capable of learning from its environment and making decisions based on its observations
  </p>
  <br />
</ExpandableSection>

  </div>
  </>;
}