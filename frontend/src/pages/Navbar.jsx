import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="navbar-logo">
          💪 GYMPOWER
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Főoldal</Link></li>
          <li><Link to="/about">Rólunk</Link></li>
          <li><Link to="/gym">Terem</Link></li>
          <li><Link to="/trainers">Edzők</Link></li>
          <li><Link to="/rules">Szabályzat</Link></li>
          
          <li><a href="http://localhost:3500/api" target="_blank" rel="noopener noreferrer">Backend</a></li>
        </ul>
        <ul className='register-links'>
          <li><Link to="/login">Bejelentkezés</Link></li>
          <li><Link to="/register">Regisztráció</Link></li>
        </ul>
      </div>
    </nav>
  );
}


export default Navbar;
