import { NavLink } from 'react-router-dom';
import style from './LocationCards.module.css';

// called in App.jsx with json data
export default function LocationCards({ data }) {
  const cardsList = data.map((location) => {
    const { cover, title, id } = location;
    // console.log(cover)
    return (
      <NavLink to={`location/${id}`}>
        <div className={style.cardWrap}>
          <img className={style.cardImage} src={cover} alt={title} key={id} />
          <h2 className={style.cardTitle}>{title}</h2>
        </div>
      </NavLink>
    );
  });

  return <div className={style.cardContainer}>{cardsList}</div>;
}
