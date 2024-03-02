import React from 'react';

function Resume() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <iframe 
        src="/assets/resume.pdf" 
        frameborder="0" 
        width="100%" 
        height="100%" 
        style={{ border: 'none' }} 
      />
    </div>
  );
}

export default Resume;