import { NavLink } from 'react-router-dom';
import style from './LocationCards.module.css';

// JSON data is passed in App.jsx
export default function LocationCards({ data }) {
  // map every data and return HTML dom with each data
  // map les données et retourne le dom HTML avec chaque donnée
  const cardsList = data.map((location) => {
    const { cover, title, id } = location;

    return (
      // each page's URL set to be 'location/id'
      // l'URL de chaque page est définie comme un 'location/id'.
      <NavLink to={`location/${id}`} key={id}>
        <div className={style.cardWrap}>
          <img className={style.cardImage} src={cover} alt={title} />
          <h2 className={style.cardTitle}>{title}</h2>
        </div>
      </NavLink>
    );
  });

  return <div className={style.cardContainer}>{cardsList}</div>;
}
