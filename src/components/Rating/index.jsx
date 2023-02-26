import style from './Rating.module.css';
import { ReactComponent as StarIcon } from '../../assets/star.svg';

// rating data is passed in 'LocationDetails' page
// les données de rating sont passées dans la page 'LocationDetails'.
export default function Ratings({ rating }) {
  // turn rating into number because it's string on JSON file
  // transformer le rating en nombre parce que c'est un string dans le fichier JSON
  const numberOfStars = parseInt(rating, 10);
  const maxRating = 5;
  // set number of grey star by extracting rating from maxRating
  // définir le nombre d'étoiles grises en extrayant le rating de maxRating
  const numberOfEmptyStar = maxRating - numberOfStars;

  const starIcons = [];

  // generate numbers of filled stars and store them in an array
  // générer des nombres d'étoiles remplies et les stocker dans un array
  for (let i = 0; i < numberOfStars; i++) {
    starIcons.push(<StarIcon key={i} className={style.star} />);
  }

  const emptyStarIcons = [];
  // generate numbers of empty stars and store them in an array
  // générer des nombres d'étoiles vides et les stocker dans un array
  for (let i = 0; i < numberOfEmptyStar; i++) {
    emptyStarIcons.push(<StarIcon key={i} className={style.emptyStar} />);
  }

  return (
    <div className={style.starWrap}>
      {/* return two arrays to display */}
      {/* retourner deux array à afficher */}
      {starIcons}
      {emptyStarIcons}
    </div>
  );
}
