import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useDataId from '../../hooks/useDataId';
import DetailHeader from '../../components/DetailHeader';
import Tags from '../../components/Tags';
import Ratings from '../../components/Rating';
import Dropdown from '../../components/Dropdown';
import style from './LocationDetails.module.css';
import CarouselGallery from '../../components/CarouselGallery';

export default function LocationDetails() {
  const { locationId } = useParams();
  const navigate = useNavigate();
  const matchedLocation = useDataId(locationId);

  useEffect(() => {
    if (!matchedLocation) {
      navigate('/404');
    }
  }, []);

  if (!matchedLocation) {
    return '';
  }

  const {
    title,
    location,
    host,
    rating,
    tags,
    description,
    equipments,
    pictures,
  } = matchedLocation;

  const equitmentList = equipments.map((equip) => <li key={equip}>{equip}</li>);

  return (
    <div>
      <CarouselGallery imageArray={pictures} description={description} />
      <DetailHeader
        title={title}
        location={location}
        name={host.name}
        picture={host.picture}
      />
      <div className={style.tagRateWrap}>
        <Tags tagList={tags} />
        <Ratings rating={rating} />
      </div>
      <div className={style.dropDownContainer}>
        <Dropdown
          title="Description"
          paragraphe={description}
          wrapClassName={style.dropDownWrap}
        />
        <Dropdown
          title="Equipments"
          paragraphe={equitmentList}
          wrapClassName={style.dropDownWrap}
        />
      </div>
    </div>
  );
}
