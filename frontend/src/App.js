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
import { Home } from './components/home';
import { Rooms } from './components/rooms';
import { About } from './components/about';
import { Header } from './components/header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Navbar bg="light" expand="sm" >
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Navbar.Brand href="#home">B&B</Navbar.Brand>
              <Nav className="me-auto" fill variant="tabs">
                <Nav.Link  href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/rooms">Rooms</Nav.Link>
                <Nav.Link href="/gallery">Gallery</Nav.Link>
                <Nav.Link href="/todo">Things to do</Nav.Link>
                <NavDropdown title="More" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Policy</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Contact
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>

        </Navbar>

        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/rooms' element={<Rooms />}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
        <br />
      </div>
    </Router>
  );
}

export default App;
