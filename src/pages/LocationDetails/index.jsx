import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useDataId from '../../hooks/useDataId';
import DetailHeader from '../../components/DetailHeader';
import Dropdown from '../../components/Dropdown';
import style from './LocationDetails.module.css';
import CarouselGallery from '../../components/CarouselGallery';

export default function LocationDetails() {
  // useParams get the URL (here URL is ID of data)
  // useParams récupère l'URL (ici l'URL est l'ID des données)
  const { locationId } = useParams();
  const navigate = useNavigate();

  // useState with default value of an empty object
  // useState avec la valeur par défaut d'un objet vide
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

  // to prevent empty page rendering instead of rendering error page
  // pour empêcher le rendu de la page vide au lieu de rendre la page d'erreur
  useEffect(() => {
    // matchedLocation : data that is correspond to ID
    const matchedLocation = useDataId(locationId);
    if (!matchedLocation) {
      navigate('/404');
    } else {
      // if there is data that matches ID,
      // use matchedLocation data instead of innitial value of empty object(which is 'locations')
      // s'il existe des données qui correspondent à l'ID,
      // utiliser les données matchedLocation au lieu de la valeur initiale de l'objet vide
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
