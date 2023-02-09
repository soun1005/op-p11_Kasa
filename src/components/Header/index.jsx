import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Header() {
  return (
    <header>
      <div className={style.logo}>
        <NavLink to="/">
          <Logo fill="#FF6060" />
        </NavLink>
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
