import style from './DetailHeader.module.css';
import Tags from '../Tags/index';
import Ratings from '../Rating/index';

export default function DetailHeader({
  title,
  location,
  name,
  picture,
  tagList,
  rating,
}) {
  return (
    <div className={style.headerContainer}>
      <div className={style.titleTagContainer}>
        <div className={style.titleWrap}>
          <h1>{title}</h1>
          <h2>{location}</h2>
        </div>
        <Tags tagList={tagList} />
      </div>
      <div className={style.profileRatingContainer}>
        <div className={style.profileWrap}>
          <span>{name}</span>
          <img src={picture} alt={name} />
        </div>
        <Ratings rating={rating} />
      </div>
    </div>
  );
}
