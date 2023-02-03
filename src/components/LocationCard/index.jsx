/* eslint-disable jsx-a11y/alt-text */
import { NavLink } from 'react-router-dom';
import style from './LocationCard.module.css';

function LocationCard({ image, title, id }) {
  return (
    <NavLink to={`details/${id}`}>
      <div className={style.cardWrap}>
        <img className={style.cardImage} src={image} alt={title} />
        <h2 className={style.cardTitle}>{title}</h2>
      </div>
    </NavLink>
  );
}

export default LocationCard;
