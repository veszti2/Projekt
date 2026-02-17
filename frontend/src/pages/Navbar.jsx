import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState, useEffect, useContext } from 'react';
import { logoContext } from '../App';

function Navbar() {
    const { logo } = useContext(logoContext);
    const [isLoggedIn, setIsLoggedIn] = useState(0);
    const [kep, setKep] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false); // ÚJ: Menü állapota

    useEffect(() => {
        let logged = JSON.parse(localStorage.getItem('isLoggedIn'));
        let user = JSON.parse(localStorage.getItem('user'));
        if (user && user.admin === true) setIsAdmin(true);
        else setIsAdmin(false);

        if (user) setKep(user.avatar);

        if (1 === Number(logged)) setIsLoggedIn(1);
        else setIsLoggedIn(0);
    }, []);

    const kilep = () => {
        setIsAdmin(false);
        setIsLoggedIn(0);
        localStorage.setItem('isLoggedIn', 0);
        localStorage.removeItem('user');
        window.location.href = '/';
    };

    // Menü bezárása linkre kattintáskor
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <nav className="navbar">
            <div className="navbar-inner container">
                <div className="navbar-logo">💪 GYMPOWER 💪</div>

                {/* ÚJ: Hamburger gomb */}
                <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Módosított menülista: az 'active' class szabályozza a megjelenést */}
                <ul className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
                    <li><Link to="/" onClick={closeMenu}>Főoldal</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>Rólunk</Link></li>
                    <li><Link to="/gym" onClick={closeMenu}>Terem</Link></li>
                    <li><Link to="/trainers" onClick={closeMenu}>Edzők</Link></li>
                    <li><Link to="/rules" onClick={closeMenu}>Szabályzat</Link></li>

                    {isAdmin && (
                        <li>
                            <a href="http://localhost:3500/api" target="_blank" rel="noopener noreferrer">
                                Backend
                            </a>
                        </li>
                    )}

                    {/* Mobilos nézetben ezek is bekerülnek a lenyíló menübe */}
                    <div className="mobile-only-auth">
                        {isLoggedIn === 0 ? (
                            <>
                                <Link to="/login" onClick={closeMenu}>Bejelentkezés</Link>
                                <Link to="/register" onClick={closeMenu}>Regisztráció</Link>
                            </>
                        ) : (
                            <>
                                <Link to="/userProfile" onClick={closeMenu}>Profil</Link>
                                <button onClick={() => { kilep(); closeMenu(); }}>Kilép</button>
                            </>
                        )}
                    </div>
                </ul>

                {/* Asztali nézetű gombok (mobilon elrejtve a CSS-ben) */}
                <div className="desktop-only-auth">
                    {isLoggedIn === 0 ? (
                        <ul className="register-links">
                            <li><Link to="/login" id="bejel">Bejelentkezés</Link></li>
                            <li><Link to="/register" id='reg'>Regisztráció</Link></li>
                        </ul>
                    ) : (
                        <div className="user-controls">
                            <button onClick={kilep} className="logout-btn">Kilép</button>
                            <div className="logo-kontener">
                                <Link to="/userProfile">Profil</Link>
                                <img src={kep} alt="Avatar" />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;