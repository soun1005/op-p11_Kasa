/* eslint-disable comma-dangle */
/* eslint-disable no-plusplus */
import style from './Rating.module.css';
import { ReactComponent as StarIcon } from '../../assets/star.svg';

export default function Ratings({ rating }) {
  const numberOfStars = parseInt(rating, 10);
  const maxRating = 5;
  const numberOfEmptyStar = maxRating - numberOfStars;

  const starIcons = [];

  for (let i = 0; i < numberOfStars; i++) {
    starIcons.push(<StarIcon key={i} className={style.star} />);
  }

  const emptyStarIcons = [];

  for (let i = 0; i < numberOfEmptyStar; i++) {
    emptyStarIcons.push(<StarIcon key={i} className={style.emptyStar} />);
  }

  return (
    <div className={style.starWrap}>
      {starIcons}
      {emptyStarIcons}
    </div>
  );
}
