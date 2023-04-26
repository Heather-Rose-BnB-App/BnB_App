import React, { useEffect, useState } from "react";
import { NavBar } from '../components/navBar'
import './styles.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Cookies from "universal-cookie";

const BookingForm = () => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numGuests, setNumGuests] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [user,setUser] = useState('');
    const [rooms,setRooms] = useState('');
    const [userID,setUserID] = useState('');
    const [roomID,setRoomID] = useState('');
    const [error, setError] = useState(null);
    const verb = NavBar.state;
    const cookie = new Cookies();

    useEffect(()=> {
        const RoomsCall = async() => {
            const response =  await fetch('http://localhost:4000/api/rooms',{
                method: 'GET',
                headers: {'Content-Type':'application/json','Accept': 'application/json, text/plain, */*'},
            }).
            then((res) => console.log(res.json())).
            then((data) => {
                setRooms(data)
            })
        };
        RoomsCall();
    },[])
    // const GetRooms = () => {
        
    // }
    // GetRooms();

    const handleSubmit = (event) => {
        event.preventDefault();

        //get the curent user or assign the eamil to the id of the bookming

        // get the rooms and assign the room id that have chosen.
        

        // send the new booking off
        const newBooking = {
            userIDorEmail : "123",
            roomID : "321",
            dateFrom : checkInDate,
            dateTo : checkOutDate
        }
        console.log(JSON.stringify(newBooking));
        const SubmittingBookingDate = async() => {
            const response = await fetch('http://localhost:4000/api/bookings',{
                    method: 'POST',
                    headers: {'Content-Type':'application/json','Accept': 'application/json, text/plain, */*',},
                    body: JSON.stringify(newBooking)
                })
            const json = response.json;
            console.log(json);
            // validate the response
            if(!response.ok){
                setError(json.error)
                console.log("an error has happened : " + json.error)
            }
            else if(response.ok)
            {
                console.log(json._id)
            }
        }
        SubmittingBookingDate()

        

        alert('Booking submitted successfully! thank you for your booking! :)');
    };
    const checkLogin = () => {
        if(cookie.get("User") != null)
        {
            console.log("User already logged in")
            setUser(cookie.get("User"))
            setName(cookie.get("User").firstName + " " + cookie.get("User").lastName)
            setEmail(cookie.get("User").email)
            setPhone(cookie.get("User").phone)
        }
    }
    
    // if the user is logged in the fields will be auto generated.
    // ;

    return(
        <Container className="createContainer">
            <Form className="createForm" onSubmit={handleSubmit}>
                <Form.Label className="createLabel"> Check-in Date </Form.Label>
                <Form.Control
                    className="createControl"
                    type="date"
                    placeholder="Check-in Date"
                    aria-label="checkinDate"
                    required="yes"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                />
                <Form.Label className="createLabel"> checkOutDate </Form.Label>
                <Form.Control
                    className="createControl"
                    type="date"
                    placeholder="CheckOut Date"
                    aria-label="checkOutDate"
                    required="yes"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                />
                <Form.Label className="createLabel"> Number of Guests </Form.Label>
                <Form.Control
                    className="createControl"
                    type="number"
                    placeholder="No. of Guests"
                    aria-label="guestNumber"
                    maxLength='2'
                    required="yes"
                    value={numGuests}
                    onChange={(e) => setNumGuests(e.target.value)}
                />
                <Form.Label className="createLabel"> Room Type </Form.Label>
                <Form.Select
                    className="createControl"
                    type="select"
                    placeholder="No. of Guests"
                    aria-label="guestNumber"
                    maxLength='2'
                    required="yes"
                    value={numGuests}
                    onChange={(e) => setNumGuests(e.target.value)}>
                </Form.Select>
                <Form.Label className="createLabel"> Name </Form.Label>
                <Form.Control
                    className="createControl"
                    type="text"
                    placeholder="Full Name"
                    aria-label="name"
                    maxLength='60'
                    required="yes"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Form.Label className="createLabel"> Email </Form.Label>
                <Form.Control
                    className="createControl"
                    type="email"
                    placeholder=""
                    aria-label="password"
                    maxLength='30'
                    required="yes"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Form.Label className="createLabel"> Contact Number </Form.Label>
                <Form.Control
                    className="createControl"
                    type="number"
                    placeholder="08* *******"
                    aria-label="password"
                    maxLength='15'
                    required="yes"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <Button className="outline-success" type='submit'>Submit</Button>
            </Form>
        </Container>
    )   
}

export class BookingPage extends React.Component {
    render() {
        return (
            <div>
                <BookingForm />
            </div>
        );
    }
}