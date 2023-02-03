import { NavLink } from 'react-router-dom';
import Logo from '../../assets/kasa_logo.png';
import style from './Header.module.css';

function Header() {
  return (
    <header>
      <div className={style.logo}>

        <img src={Logo} alt="logo" />

      </div>
      <nav>
        <ul className={style.homeNav}>
          <li>
            <NavLink className="homeLink" to="/"> Accueil </NavLink>
          </li>
          <li>
            <NavLink className="homeLink" to="about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
