/* eslint-disable no-plusplus */
// import useData from '../../hooks/useData';
import { useState } from 'react';
import style from './CarouselGallery.module.css';
import { ReactComponent as LeftArrow } from '../../assets/arrowLeft.svg';
import { ReactComponent as RightArrow } from '../../assets/arrowRight.svg';

export default function CarouselGallery({ imageArray, desc }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    if (currentIndex < imageArray.length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    } else {
      setCurrentIndex(imageArray.length - 1);
    }
  };

  return (
    <div className={style.galleryContainer}>
      <img src={imageArray[currentIndex]} alt={desc} />
      <div className={style.arrowContainer}>
        <LeftArrow onClick={previous} className={style.arrow} />
        <RightArrow onClick={next} className={style.arrow} />
      </div>
    </div>
  );
}

// return (
//   <div className={style.galleryContainer}>
//     <img src={imageArray} alt={description} className={style.image} />
//     <div className="arowContainer">
//       {leftArrow}
//       {rightArrow}
//     </div>
//   </div>
// );
