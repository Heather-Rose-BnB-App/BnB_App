import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './pages/homePage';
import { LoginPage } from './pages/loginPage'
import { Rooms } from './components/rooms';
import { About } from './components/about';
import {Gallery} from './/components/gallery';
import { Header } from './components/header';
import { NavBar } from './components/navBar'
import { Footer } from './components/footer'
import { CreateNewAccount} from './pages/createNewAccountPage'
import { BookingPage } from './pages/bookingPage';
import { ContactPage } from './components/contactPage'
//import NewNavBar from './components/nav';

// main app entry point
function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        {/* navbar and its routes*/}
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/rooms' element={<Rooms />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/gallery' element={<Gallery />}></Route>
          <Route path='/bookingPage' element={< BookingPage/>}></Route>
          <Route path='/createNewAccount' element={<CreateNewAccount/>}></Route>
          <Route path='/contactPage' element={<ContactPage />}></Route>
        </Routes>
        <br />
        <Footer></Footer> 
      </div>
    </Router>
  );
}

export default App;
