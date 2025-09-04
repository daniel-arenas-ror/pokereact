import React from 'react';
import { Layout } from 'antd';
import './Footer.css';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter className="app-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Dev by Daniel Arenas</h4>
          <p><a style={{ color: 'white' }} href="https://www.linkedin.com/in/dev-darenas/">LinkedIn</a></p>
          <p><a style={{ color: 'white' }} href="https://github.com/daniel-arenas-ror">GitHub</a></p>
        </div>
        <div className="footer-section">
          <h4>About</h4>
          <p>Built with React, Redux, and Ant Design</p>
        </div>
        <div className="footer-section">
          <h4>Data Source</h4>
          <p>Pokemon data provided by PokeAPI</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 PokeDux. All rights reserved.</p>
      </div>
    </AntFooter>
  );
};

export default Footer;
