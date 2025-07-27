import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Map from './components/Map/Map.jsx';
import Home from './pages/Home/Home.jsx';
import Updates from './components/Updates/Updates.jsx';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/updates" element={<Updates />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App;