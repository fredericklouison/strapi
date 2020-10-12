import React from 'react';
import './Acceuil.css';

function Acceuil() {
  
  return (
    <div className="Acceuil">
      
      <div id='text'>
          <h1>Fréderick<span> LOUISON</span></h1>
          <h2><span>Développeur </span>Web</h2>
          <h3>Bienvenue sur mon Portfolio</h3>
          <div id='enterAnim'>
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
      <ul id='cicleArea'>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
}

export default Acceuil;
