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
          <li>Accueil</li>
          <li>A propos</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
