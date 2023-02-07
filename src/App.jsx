/* eslint-disable object-curly-newline */
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

// pages
import Home from './pages/Home/index';
import About from './pages/About/index';
import LocationDetails from './pages/LocationDetails';
// import Accommodation from './pages/Accommodation';
import Error404 from './pages/Error404/index';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Home />} />
            <Route exact path=":locationId" element={<LocationDetails />} />
            <Route exact path="about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
