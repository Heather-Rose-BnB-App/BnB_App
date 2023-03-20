import './styles.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";


const CreateNewUserForm = () => {
    //values for setting and sending
    const [firstName , setFirstName] = useState('');
    const [lastName , setLastName] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [phoneNumber , setPhoneNumber] = useState('');

    //listen for the form submit
    

    return(
        <Container className="createContainer">
            <Form className="createForm">
                <Form.Label className="createLabel"> First Name </Form.Label>
                <Form.Control
                    className="createControl"
                    type="username"
                    placeholder="First Name"
                    aria-label="username"
                    maxLength='100'
                    required="yes"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <Form.Label className="createLabel"> Last Name </Form.Label>
                <Form.Control
                    className="createControl"
                    type="lastName"
                    placeholder="Last Name"
                    aria-label="password"
                    maxLength='40'
                    required="yes"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <Form.Label className="createLabel"> Email Address </Form.Label>
                <Form.Control
                    className="createControl"
                    type="email"
                    placeholder="johnsmith@email.com"
                    aria-label="password"
                    maxLength='40'
                    required="yes"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Label className="createLabel"> Password </Form.Label>
                <Form.Control
                    className="createControl"
                    type="password"
                    placeholder="password"
                    aria-label="password"
                    maxLength='40'
                    required="yes"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Form.Label className="createLabel"> Contact Number </Form.Label>
                <Form.Control
                    className="createControl"
                    type=""
                    placeholder="08* *******"
                    aria-label="password"
                    maxLength='15'
                    required="yes"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <Button className="outline-success" type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}
export default CreateNewUserForm;