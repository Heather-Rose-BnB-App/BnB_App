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
    constructor() {
        super();
        const cookie = new Cookies();
        this.state = {
            username: '',
            password: '',
            fullName: '',
            validLogin: false,
            user: null
        }
        if(cookie.get('User') != null)
        {
            console.log(cookie.get('User').lName);
            this.state.user = cookie.get('User');
            this.state.fullName = cookie.get('User').fName + " " + cookie.get('User').lName
            this.state.validLogin = true;
        }
        else
            this.state.validLogin = false;
    }

    setPassword(evt) {
        this.state.password = evt.target.value;
        this.password = evt.target.value;
        //console.log('password updated : ' + this.password)
    }
    setUsername(evt) {
        this.state.username = evt.target.value;
        this.username = evt.target.value;
        //console.log('username updated : ' + this.username)
    }
    async LoginUser(e) {
        
        const cookie = new Cookies();
        var json;
        this.state.user = cookie.get('User')
        if(this.state.user !== null)
        {
            console.log("Cookie still has user data")
        }
        else console.log("did not find cookie")
        
        // cookie.get()
        // send post request          http://localhost:4000/api/users/login/:email
        const response = await fetch('http://localhost:4000/api/users/login/' + this.username).
            then((res) => res.json()).
            then((data) => {
                this.state.user = data[0]
                if (this.state.user.password === this.password) {
                    // now we need to create a new object for the cookie
                    this.state.validLogin = true;
                    const cook = {
                        fName: this.state.user.firstName,
                        lName : this.state.user.lastName,
                        email: this.state.user.email,
                        phone: this.state.user.mobile,
                        valid: this.state.validLogin
                    }
                    this.state.user = null; // null the user so protect password
                    cookie.set('User', cook, {maxAge : 1200}); //set the cookies to only 2 hours.
                    //this.forceUpdate(); // consoidered bad practice been needed to re render. so login component is changed
                }
                else {
                    this.state.user = null;
                    this.state.validLogin = false;
                }
            }).
            catch((err) => console.log(err))
    }
    

    render() {
        //assigning the below html code to a value to then toggle between
        let login = 
        <Container style={{ textAlign: 'right' }}>
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
                <Button variant="outline-success" type="button" onClick={() => { this.LoginUser() }}> Login </Button>
            </Form>
        <a className="LoginCreateNew" href="CreateNewAccount">Create Account</a>

        </Container>
            return (
                <Navbar bg="light" expand="sm" className="fixed-top">
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Navbar.Brand href="/">B&B</Navbar.Brand>
                            <Nav className="me-auto" fill variant="tabs">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/about">About</Nav.Link>
                                <Nav.Link href="/rooms">Rooms</Nav.Link>
                                <Nav.Link href="/gallery">Gallery</Nav.Link>
                                <Nav.Link href="/todo">Things to do</Nav.Link>
                                <NavDropdown title="More" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Policy</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="/contactPage">
                                        Contact
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            {this.state.validLogin ? 'Welcome ' + this.state.fullName : login} {/* refactored this to use the condition on the statement, HTML can be a let variable  */}
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            );
        // }
        // else {
        //     return (
        //         <Navbar bg="light" expand="sm" className="fixed-top">
        //             <Container>
        //                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //                 <Navbar.Collapse id="basic-navbar-nav">
        //                     <Navbar.Brand href="#home">B&B</Navbar.Brand>
        //                     <Nav className="me-auto" fill variant="tabs">
        //                         <Nav.Link href="/">Home</Nav.Link>
        //                         <Nav.Link href="/about">About</Nav.Link>
        //                         <Nav.Link href="/rooms">Rooms</Nav.Link>
        //                         <Nav.Link href="/gallery">Gallery</Nav.Link>
        //                         <Nav.Link href="/todo">Things to do</Nav.Link>
        //                         <NavDropdown title="More" id="basic-nav-dropdown">
        //                             <NavDropdown.Item href="#action/3.1">Policy</NavDropdown.Item>
        //                             <NavDropdown.Divider />
        //                             <NavDropdown.Item href="/contactPage">
        //                                 Contact
        //                             </NavDropdown.Item>
        //                         </NavDropdown>
        //                     </Nav>{this.state.validLogin ? 'Welcome ' + this.state.username : login}
        //                     <Container style={{ textAlign: 'right' }}>
        //                         <Form className="d-flex">
        //                             <Form.Control
        //                                 type="username"
        //                                 placeholder="Username"
        //                                 className="w-50"
        //                                 aria-label="username"
        //                                 maxLength='100'
        //                                 value={this.username}
        //                                 onChange={(e) => this.setUsername(e)}
        //                             />
        //                             <Form.Control
        //                                 type="password"
        //                                 placeholder="Password"
        //                                 className="w-50"
        //                                 aria-label="password"
        //                                 maxLength='40'
        //                                 value={this.password}
        //                                 onChange={(e) => this.setPassword(e)}
        //                             />
        //                             <Button variant="outline-success" type="button" onClick={() => { this.LoginUser() }}> Login </Button>
        //                         </Form>
        //                         <a className="LoginCreateNew" href="CreateNewAccount">Create Account</a>
        //                     </Container>
        //                 </Navbar.Collapse>
        //             </Container>
        //         </Navbar>
        //     );
        // }
    };
};
export default NavBar;