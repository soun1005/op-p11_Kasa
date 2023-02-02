/* eslint-disable jsx-a11y/alt-text */
import style from './LocationCard.module.css';

function LocationCard({ image, title }) {
  return (
    <div className={style.cardWrap}>
      <img className={style.cardImage} src={image} alt={title} />
      <h2 className={style.cardTitle}>{title}</h2>
    </div>
  );
}

export default LocationCard;
