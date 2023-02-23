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
          paragraphe="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
        />
        <Dropdown
          title="Respect"
          paragraphe="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Service"
          paragraphe="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
        />
        <Dropdown
          title="Responsabilité"
          paragraphe="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}
