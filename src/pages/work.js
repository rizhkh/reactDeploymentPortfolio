import React, { useState } from 'react';

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

export default function WorkTable(){
    return <>
    <div >
      <ExpandableSection org="Comcast" colorway="work-button-location" >
      <p style={{ 'fontSize': '13px', margin: '0', padding: '0'}} >Worked as full stack engineer doing various things</p>
      <br />
      </ExpandableSection>
      
      <ExpandableSection org="IPKeys" pos="Full-Stack Engineer" colorway="work-button-location" >
      <p style={{ 'fontSize': '13px', margin: '0', padding: '0'}} >Worked on building an data network analytics platform. Carried development from inception to offical product release supporting customers</p>
      <br />
      </ExpandableSection>
      
      <ExpandableSection org="Sunbird" pos="Engineer"  colorway="work-button-location">
      <p style={{ 'fontSize': '13px', margin: '0', padding: '0'}} >Worked on building and improving a system that helps manage and test data efficiently, making sure everything runs smoothly and meets quality standards </p>
      <br />
      </ExpandableSection>
    </div>
    </>;
}


