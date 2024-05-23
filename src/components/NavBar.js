import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/level-diagnosis">Level Diagnosis</Link></li>
        {/* 他のリンクも追加 */}
      </ul>
    </nav>
  );
}

export default NavBar;
