import { Link } from 'react-router-dom';
import './navbar.css'; // ha szeretnél stílust is hozzáadni

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Főoldal</Link></li>
        <li><Link to="/about">Rólunk</Link></li>
        <li><Link to="/gym">Terem</Link></li>
        <li><Link to="/trainers">Edzők</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;