import LocationCard from '../LocationCard';
import style from './LocationCards.module.css';

export default function LocationCards({ data }) {
  const cardsList = data.map((location) => {
    const { cover, title, id } = location;
    // console.log(cover)
    return (
      <LocationCard image={cover} title={title} id={id} key={id} />
    );
  });

  return (
    <div className={style.cardContainer}>
      {cardsList}
    </div>
  );
}
