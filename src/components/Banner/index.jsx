import style from './Banner.module.css';

export default function Banner({ bannerImg, bannerTitle }) {
  return (
    <div className={style.bannerContainer}>
      <div className={style.imageWrap}>
        <img className={style.bannerImg} src={bannerImg} alt={bannerTitle} />
      </div>
      <h1 className={style.bannerTitle}>{bannerTitle}</h1>
    </div>
  );
}
