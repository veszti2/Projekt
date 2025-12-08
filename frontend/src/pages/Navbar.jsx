import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import { useEffect } from 'react';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(0);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    let logged = JSON.parse(localStorage.getItem('isLoggedIn'));
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.admin === true) setIsAdmin(true);
    else setIsAdmin(false);

    if (1 === Number(logged)) setIsLoggedIn(1);
      else setIsLoggedIn(0);
  }, []);

  const kilep = () => {
    setIsAdmin(false);
    setIsLoggedIn(0);
    localStorage.setItem('isLoggedIn', 0)
    localStorage.removeItem('user');
  }


  return (
    <nav className="navbar">
      {/* EZT MÓDOSÍTOTTAM: Hozzáadtam a 'container' class-t, ami segít 
        a szélesség beállításában és a Flexbox működésében.
      */}
      <div className="navbar-inner container"> 
        <div className="navbar-logo">
          💪 GYMPOWER 💪
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Főoldal</Link></li>
          <li><Link to="/about">Rólunk</Link></li>
          <li><Link to="/gym">Terem</Link></li>
          <li><Link to="/trainers">Edzők</Link></li>
          <li><Link to="/rules">Szabályzat</Link></li>
          <li><Link to="/userProfile">Profil</Link></li>
          
          {isAdmin ?
          <li><a href="http://localhost:3500/api" target="_blank" rel="noopener noreferrer">Backend</a></li>
          
          : <div></div>}
        </ul>
        {/* A regisztrációs/kilépési részek maradhatnak. Az elrendezés
          a CSS-ben fog történni.
        */}
        {isLoggedIn === 0 ?
        <ul className='register-links'>
          <li><Link to="/login">Bejelentkezés</Link></li>
          <li><Link to="/register">Regisztráció</Link></li>
        </ul>
          : <div>
            <button onClick={kilep}>Kilép</button>
            </div>}
      </div>
    </nav>
  );
}


export default Navbar;