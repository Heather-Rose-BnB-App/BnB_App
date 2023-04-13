import React from "react";
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';



export class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="light" expand="sm" className="fixed-top">
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
                        <Container style={{textAlign: 'right'}}>
                            <Form className="d-flex">
                                <Form.Control
                                  type="username"
                                  placeholder="Username"
                                  className="w-50"
                                  aria-label="username"
                                  maxLength='100'
                                />
                                <Form.Control
                                type="password"
                                placeholder="Password"
                                className="w-50"
                                aria-label="password"
                                maxLength='40'
                                />
                                <Button variant="outline-success"> Login </Button>
                            </Form>
                            <a className="LoginCreateNew" href="CreateNewAccount">Create Account</a>
                        </Container>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    };
};

export default NavBar;