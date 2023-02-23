import { useState } from 'react';
import style from './CarouselGallery.module.css';
import { ReactComponent as LeftArrow } from '../../assets/arrowLeft.svg';
import { ReactComponent as RightArrow } from '../../assets/arrowRight.svg';

export default function CarouselGallery({ imageArray, desc }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // if there is only one photo, hide arrow buttons
  // s'il n'y a qu'une seule photo, cacher les boutons fléchés
  const displayArrow = imageArray.length > 1;

  // if current index is smaller than length, show next image
  // else show the first image
  // si l'index actuel est inférieur à la longueur, afficher l'image suivante.
  // Sinon, afficher la première image
  const next = () => {
    if (currentIndex < imageArray.length - 1) {
      setCurrentIndex((prevState) => prevState + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // if current index is bigger than 0, current index - 1
  // else show the last image
  // si l'index actuel est supérieur à 0, index actuel - 1
  // sinon afficher la dernière image
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
      {displayArrow && (
        <>
          <div className={style.arrowContainer}>
            <LeftArrow onClick={previous} className={style.arrow} />
            <RightArrow onClick={next} className={style.arrow} />
          </div>
          <div className={style.indexContainer}>
            <span>{`${currentIndex + 1}/${imageArray.length}`}</span>
          </div>
        </>
      )}
    </div>
  );
}
