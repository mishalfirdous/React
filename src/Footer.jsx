
// Footer.js
import React from 'react';

const Footer = () => {
  const linkedInProflie = 'https://www.linkedin.com/in/mishal-firdous-b99a0a131/';

  return (
    <footer className='footer-section'>
      <p>Connect with me on LinkedIn: <a href={linkedInProflie} target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
    </footer>
  );
};

export default Footer;

