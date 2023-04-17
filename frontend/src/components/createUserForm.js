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
    const [mobile , setPhoneNumber] = useState('');
    const [error, setError] = useState(null);
    const [newAccountCreated, setNewAccountCreated] = useState;

    //listen for the form submit
    const OnSubmit = (e) => {
        //keep page from reloading
        e.preventDefault();

        // wrap data into an object
        const newUser = {firstName,lastName,email,password,mobile}
        console.log(JSON.stringify(newUser))

        const SubmittingDate = async() => {
            // send post request          http://localhost:4000/api/users
            const response = await fetch('http://localhost:4000/api/users',{
                method: 'POST',
                headers: {'Content-Type':'application/json','Accept': 'application/json, text/plain, */*',},
                body: JSON.stringify(newUser)
            })
            const json = response.json;
            console.log(json);

            if(!response.ok){
                setError(json.error)
                console.log("an error has happened : " + json.error)
            }
            else if(response.ok)
            {
                setFirstName('')
                setLastName('')
                setEmail('')
                setPassword('')
                setPhoneNumber('')
                console.log('New Entry Created')
                // a custom alert can be created for this if needed
                //alert('New Entry Created')
                setNewAccountCreated('true')
                console.log(newAccountCreated)
            }
        }
        SubmittingDate();
        
    }
    if(newAccountCreated !== 'true')
    {
        return(
            <Container className="createContainer">
                <Form className="createForm" onSubmit={OnSubmit}>
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
                        value={mobile}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                    {error && <div className='error'>{error}</div>}
                    <Button className="outline-success" type='submit'>Submit</Button>
                </Form>
            </Container>
        )
    }
    else
    {
        return(
            <Container className="createContainer">
                <div className='created'>
                    <h2>New Account Created!!</h2>
                </div>
                <div>
                    <Button href='../'>Home</Button>
                </div>
            </Container>
        )
    }
    
}
export default CreateNewUserForm;