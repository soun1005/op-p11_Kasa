import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

// pages
import Home from './pages/Home/index';
import About from './pages/About/index';
import LocationDetails from './pages/LocationDetails';
// import Accommodation from './pages/Accommodation';
import Error404 from './pages/Error404/index';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route
            exact
            path="details/:locationId"
            element={<LocationDetails />}
          />
          <Route exact path="about" element={<About />} />
          <Route exact path="*" element={<Error404 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
