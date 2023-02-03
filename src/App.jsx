import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';

// pages
import Home from './pages/Home';
import About from './pages/About';
import LocationDetails from './pages/LocationDetails';
// import Accommodation from './pages/Accommodation';
// import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route exact path="details/:id" element={<LocationDetails />} />
          <Route exact path="about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
