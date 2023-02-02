import style from './Banner.module.css';

function Banner({ bannerImg, bannerTitle }) {
  return (
    <div className={style.bannerWrap}>
      <img className={style.bannerImg} src={bannerImg} alt={bannerTitle} />
      <h1 className={style.bannerTitle}>{bannerTitle}</h1>
    </div>
  );
}

export default Banner;
