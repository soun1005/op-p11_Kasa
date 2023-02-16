import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useDataId from '../../hooks/useDataId';
import DetailHeader from '../../components/DetailHeader';
import Dropdown from '../../components/Dropdown';
import style from './LocationDetails.module.css';
import CarouselGallery from '../../components/CarouselGallery';

export default function LocationDetails() {
  // useParams catch the id that is used on URL
  const { locationId } = useParams();
  const navigate = useNavigate();

  // useState with default value of an empty object
  const [locations, setLocations] = useState({
    title: '',
    location: '',
    host: { name: '', picture: '' },
    rating: '',
    tags: [],
    description: '',
    equipments: [],
    pictures: [],
  });

  useEffect(() => {
    // matchedLocation is the data that is found by URL(=id of data)
    const matchedLocation = useDataId(locationId);
    if (!matchedLocation) {
      navigate('/404');
    } else {
      // if there is data that matches ID
      // use matchedLocation data instead of innitial value(which is 'locations')
      setLocations(matchedLocation);
    }
  }, []);

  const {
    title,
    location,
    host,
    rating,
    tags,
    description,
    equipments,
    pictures,
  } = locations;

  const equitmentList = equipments.map((equip) => <li key={equip}>{equip}</li>);

  return (
    <div>
      <CarouselGallery imageArray={pictures} description={description} />
      <DetailHeader
        title={title}
        location={location}
        name={host.name}
        picture={host.picture}
        tagList={tags}
        rating={rating}
      />

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
