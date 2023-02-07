import LocationCards from '../components/LocationCards';
import useData from '../hooks/useData';
import Banner from '../components/Banner';
import mainBanner from '../assets/mainBanner.png';

export default function Home() {
  const data = useData();
  return (
    <>
      <Banner
        bannerImg={mainBanner}
        bannerTitle="Chez vous, partout et ailleurs"
        customClassName="homeBanner"
      />
      <LocationCards data={data} />
    </>
  );
}
