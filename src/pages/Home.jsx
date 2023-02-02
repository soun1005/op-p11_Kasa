import Header from '../components/Header';
import LocationCards from '../components/LocationCards';
import useData from '../hooks/useData';
import Banner from '../components/Banner';
import mainBanner from '../assets/mainBanner.png';

function Home() {
  const data = useData();
  return (
    <>
      <Header />
      <Banner bannerImg={mainBanner} bannerTitle="Chez vous, partout et ailleurs" />
      <LocationCards data={data} />
    </>
  );
}

export default Home;
