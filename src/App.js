import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Outlet
} from "react-router-dom";

import Navbarnabeel from './Components/Navbar/Navbar';
import Footernabeel from './Components/Footer/Footer';
import Servicesview from './Views/Servicesview/Servicesview';
import Home from './Views/Homeview/Home';
import Ourwork from './Components/Ourwork/Ourwork';
import Achievements from './Components/Achievements/Achievements';
import Contactus from './Components/Contactus/Contactus';
import Construction from './Components/Construction/Construction';
import ElectricalWiring from './Components/ElectricalWiring/ElectricalWiring';
import CCTV from './Components/CCTV/CCTV';
import FeasibilityStudy from './Components/FeasibilityStudy/FeasibilityStudy';
import CPM from './Components/CPM/CPM';
import Webdev from './Components/WebDevelopement/Webdev';
import DigitalMarketing from './Components/DigitalM/DigitalmMarketing';
import ArchitectureInteriorDesigning from './Components/Architecture & Interior Designing/ArchitectureInteriorDesigning';
import Aboutusview from './Views/Aboutview/Aboutus';

function App() {
  return (
    <div className="App">
      <Navbarnabeel />
      <Routes>
        <Route exact path='' element={<Home />} />
        <Route exact path='Services' element={<Servicesview />} >
        </Route>
        <Route exact path='Ourwork' element={<Ourwork />} />
        <Route exact path='Contactus' element={<Contactus />} />
        <Route exact path='Aboutusview' element={<Aboutusview />} />
        <Route path=" ArchitectureInteriorDesigning" element={< ArchitectureInteriorDesigning />} />
        <Route path="Construction" element={<Construction />} />
        <Route path="ElectricalWiring" element={<ElectricalWiring />} />
        <Route path="CCTV" element={<CCTV />} />
        <Route path="FeasibilityStudy" element={<FeasibilityStudy />} />
        <Route path="CPM" element={<CPM />} />
        <Route path="Webdev" element={<Webdev />} />
        <Route path="DigitalMarketing" element={<DigitalMarketing />} />
      </Routes>
      <Footernabeel />
      <Outlet />
    </div>
  );
}

export default App;