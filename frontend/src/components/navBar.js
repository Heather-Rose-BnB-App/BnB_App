import React from "react";
import './navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import Cookies from 'universal-cookie';

import 'bootstrap/dist/css/bootstrap.min.css';

export class NavBar extends React.Component {
    constructor(){
        super();
        const cookie = new Cookies();
        this.state = {
            username : '',
            password : '',
            validLogin : false,
            user : null
        }
        let username = '';
        let password = '';
        let user = '';
        let validLogin;
        if(cookie.get('user') != null)
        {
            console.log(cookie.get('user'));
            this.state.user = cookie.get('user');
            validLogin = true;
        }
        else
            validLogin = false;
    }
    
    setPassword(evt){
        this.state.password = evt.target.value;
        this.password = evt.target.value;
        //console.log('password updated : ' + this.password)
    }
    setUsername(evt){
        this.state.username = evt.target.value;
        this.username = evt.target.value;
        //console.log('username updated : ' + this.username)
    }
    async LoginUser(){
        var json;
        // send post request          http://localhost:4000/api/users/login/:email
        const response = await fetch('http://localhost:4000/api/users/login/'+this.username).
        then((res) => res.json()).
        then((data) => {
            this.state.user = data[0]
            //this.user = data[0]
        }).
        catch((err) => console.log(err))

        if(this.state.user.password === this.password)
        {
            this.cookie.set('user',this.state.user,{path: '/'});
            this.state.user = null;
            console.log("Valid Login")
            this.state.validLogin = true;
            this.forceUpdate(); // consoidered bad practice been needed to re render. so login component is changed
            
            
        }
        else{
            this.state.user = null;
            console.log("InValid Login")
            this.state.validLogin = false;
        }
    }

    render() {
        console.log("render call")
        if(this.state.validLogin)
        {
            return(
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
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            );
        }
        else
        {
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
                                        value={this.username}
                                        onChange={(e) => this.setUsername(e)}
                                    />
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        className="w-50"
                                        aria-label="password"
                                        maxLength='40'
                                        value={this.password}
                                        onChange={(e) => this.setPassword(e)}
                                    />
                                    <Button variant="outline-success" type="button" onClick={ () => {this.LoginUser()}}> Login </Button>
                                </Form>
                                <a className="LoginCreateNew" href="CreateNewAccount">Create Account</a>
                            </Container>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            );
        }
    };
};
export default NavBar;