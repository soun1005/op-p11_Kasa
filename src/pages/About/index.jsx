import Banner from '../../components/Banner';
import aboutBanner from '../../assets/aboutBanner.png';
import Dropdown from '../../components/Dropdown';
import style from './About.module.css';

export default function About() {
  return (
    <div>
      <Banner bannerImg={aboutBanner} bannerTitle="" />
      <div className={style.aboutDropdownContainer}>
        <Dropdown
          title="Fiabilité"
          paragraphe="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Respect"
          paragraphe="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Service"
          paragraphe="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Responsabilité"
          paragraphe="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
      </div>
    </div>
  );
}
