import { useParams } from 'react-router-dom';
import useDataId from '../hooks/useDataId';
import DetailHeader from '../components/DetailHeader';
import Tags from '../components/Tags';
import Ratings from '../components/Rating';
import Dropdown from '../components/Dropdown';
import style from './LocationDetails.module.css';

export default function LocationDetails() {
  const { locationId } = useParams();
  // console.log(id);
  // const location = locationData.find((locations) => locations.id === id);
  const matchedLocation = useDataId(locationId);

  const {
    // cover,
    title,
    location,
    host,
    rating,
    tags,
    // locationId,
    description,
    equipments,
  } = matchedLocation;

  // console.log(typeof tags);

  return (
    <div>
      {/* Here goes carousel component */}
      <DetailHeader
        title={title}
        location={location}
        name={host.name}
        picture={host.picture}
      />
      <div className="tagRateWrap">
        <Tags tagList={tags} />
        <Ratings rating={rating} />
      </div>
      <div className={style.dropDownWrap}>
        <Dropdown
          title="Description"
          paragraphe={description}
          className={style.description}
        />
        <Dropdown
          title="Equipments"
          paragraphe={equipments}
          className={style.equitments}
        />
      </div>
    </div>
  );
}
