/* eslint-disable object-curly-newline */
import './assets/App.css';
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
        <div className="container">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                exact
                path="location/:locationId"
                element={<LocationDetails />}
              />
              <Route exact path="about" element={<About />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </BrowserRouter>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
