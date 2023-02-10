import { NavLink } from 'react-router-dom';
import style from './Header.module.css';
import { ReactComponent as Logo } from '../../assets/logo.svg';

export default function Header() {
  return (
    <header>
      <div>
        <NavLink to="/">
          <Logo fill="#FF6060" className={style.logo} />
        </NavLink>
      </div>
      <nav>
        <ul className={style.homeNav}>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="about">A Propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
