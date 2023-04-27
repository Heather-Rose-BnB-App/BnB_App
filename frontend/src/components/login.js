import {useEffect, useState } from 'react'; 
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cookies from 'universal-cookie';

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [validLogin, setValidLogin] = useState('');
    const cookie = new Cookies();

    useEffect(() => {
        const checkCookie = () => {
            if(cookie.get("User"))
                setValidLogin(cookie.get("User").valid)
        }
        checkCookie();
    })

    const LoginUser = (event) => {
        event.preventDefault()
        const getUsers = async() => {
            const response = await fetch('http://localhost:4000/api/users/login/' + username).
            then((res) => res.json()).
            then((data) => {
                console.log(data[0])
                if (data[0].password === password) {
                    // now we need to create a new object for the cookie
                    setValidLogin(true)
                    const cook = {
                        id : data[0]._id,
                        fName: data[0].firstName,
                        lName : data[0].lastName,
                        email: data[0].email,
                        phone: data[0].mobile,
                        valid: true
                    }
                    cookie.set('User', cook, {maxAge : 1200}); //set the cookies to only 2 hours.
                }
                else {
                    setValidLogin(false)
                }
            }).
            catch((err) => console.log(err))
        }
        getUsers();
        // send post request          http://localhost:4000/api/users/login/:email
    };

    if(!validLogin === true)
    {
        return(
            <Container className="createContainer">
                <Form className="createForm" onSubmit={LoginUser}>
                    <Form.Label className="createLabel"> Username </Form.Label>
                    <Form.Control
                        className="createControl"
                        type="text"
                        placeholder="Email"
                        aria-label="username"
                        required="yes"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Label className="createLabel"> Password </Form.Label>
                    <Form.Control
                        className="createControl"
                        type="password"
                        placeholder="password"
                        aria-label="password"
                        required="yes"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button className="outline-success" type='submit'>Login</Button>
                </Form>
            </Container>
        )
    }
    else{
        return(
            <Container className="createContainer">
                <h2>Thank you for logging in</h2>
                <h2>{cookie.get("User").fName + " " + cookie.get("User").lName }</h2>
                <Button href='/bookingPage'> Book Now</Button>
            </Container>
        )
    }
    
}
export default Login;