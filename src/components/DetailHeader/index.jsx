/* eslint-disable object-curly-newline */
import style from './DetailHeader.module.css';

export default function DetailHeader({ title, location, name, picture }) {
  return (
    <div className={style.headerWrap}>
      <div className={style.titleWrap}>
        <h1>{title}</h1>
        <h2>{location}</h2>
      </div>
      <div className={style.profileWrap}>
        <span>{name}</span>
        <img src={picture} alt={name} />
      </div>
    </div>
  );
}
