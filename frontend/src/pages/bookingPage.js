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
    const [roomTypes,setRoomTypes] = useState('');
    const [user,setUser] = useState('');
    const [rooms,setRooms] = useState('');
    const [userID,setUserID] = useState('');
    const [error, setError] = useState(null);
    const verb = NavBar.state;
    const cookie = new Cookies();

    // method for validating number of guests
    const numOfGuestCheck = (event) => {
         let num = event.target.value
         if(num < 0) num = 0
         else if(num > 0) num = 2
         setNumGuests(num)
    }
    // used for retrieving the rooms data
    useEffect(()=> {
        // setting guest number to 1 by default
        setNumGuests(1)
        //getting all the rooms
        const RoomsCall = async() => {
            const response =  await fetch('http://localhost:4000/api/rooms',{
                method: 'GET',
                headers: {'Content-Type':'application/json','Accept': 'application/json, text/plain, */*'},
            }).
            then((res) => res.json()).
            then((data) => {
                let room = []
                // creating new value for the room types composed of the room name and what beds are in it
                for(let i = 0;i < data.length;i++)
                {
                    room.push(data[i]._id,data[i].roomName +" - "+data[i].type)
                }
                setRoomTypes(data[0].roomName +" - "+data[0].type)
                setRooms(room)
            })
        };
        RoomsCall();
    },[])
    //used for filling in the types of rooms based on the rooms from the database
    const Types = () => {
        let roomsHTML = []
        //used for creating html for the options list in the render
        for(let i=1;i< rooms.length;i+=2)
        {
            roomsHTML.push(<option key={i-1} id="rooms">{rooms[i]}</option>)
        }
        return roomsHTML;
    }
    // get user api call for the user id when assigning it to the booking
    const GetUser = async() => {
        const response =  await fetch('http://localhost:4000/api/users/login/' + cookie.get('User').email,{
            method: 'GET',
            headers: {'Content-Type':'application/json','Accept': 'application/json, text/plain, */*'},
        }).
        then((res) => res.json()).
        then((data) => {
            return data[0]._id
        })
    };

    // submit event for the form 
    const handleSubmit = (event) => {
        event.preventDefault();
        let id = rooms[rooms.indexOf(roomTypes)-1]
        let userID = ''
        let newBooking = '';
        userID = cookie.get('User').id

        // validate dates
        let date1 = new Date(checkInDate)
        let date2 = new Date(checkOutDate);
        let now = new Date();
        if(date1 > date2 || date1 < now) // invalid dates
        {
            console.log("Invalid dates")
            alert('Invalid booking dates - check-in must be before check-out');
        }
        else if(date1 < date2 && date1 >= now) // condition if dates are valid
        {
            // check if the cookie is already valid and if so set some data for auto filled fields
            if(cookie.get('User').valid === true)
            {
                newBooking = {
                    userIDorEmail : userID,
                    roomID : id,
                    dateFrom : checkInDate,
                    dateTo : checkOutDate
                }
            }
            else
            { // if the user is on the booking page with no login
                newBooking = {
                    userIDorEmail : email,
                    roomID : id,
                    dateFrom : checkInDate,
                    dateTo : checkOutDate
                }
            }
            // send the new booking off
            const SubmittingBookingDate = async() => {
                const response = await fetch('http://localhost:4000/api/bookings',{
                        method: 'POST',
                        headers: {'Content-Type':'application/json','Accept': 'application/json, text/plain, */*',},
                        body: JSON.stringify(newBooking)
                    })
                const json = response.json;
                // console.log(json);
                // validate the response
                if(!response.ok){
                    setError(json.error)
                    console.log("an error has happened : " + json.error)
                }
                else if(response.ok)
                {
                    console.log(json._id)
                    alert('Booking submitted successfully! Thank you for your booking!');
                }
            }
            SubmittingBookingDate()
        };
        }
        

        // useeffect for getting cookie information and setting it if the user is logged in
    useEffect(()=> {
        if(cookie.get("User") != null)
        {
            console.log("User already logged in")
            setUser(cookie.get("User"))
            setName(cookie.get("User").fName + " " + cookie.get("User").lName)
            setEmail(cookie.get("User").email)
            setPhone(cookie.get("User").phone)
        }
    },[])
// render
    return(
        <Container className="createContainer">
            <Form className="createForm" onSubmit={handleSubmit}>
                <Form.Label className="createLabel"> Check-in Date </Form.Label>
                <Form.Control
                    className="createControl"
                    type="date"
                    placeholder="Check-in Date"
                    aria-label="checkinDate"
                    min={new Date().toISOString().split("T")[0]}
                    required="yes"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                />
                <Form.Label className="createLabel"> Check-out Date </Form.Label>
                <Form.Control
                    className="createControl"
                    type="date"
                    placeholder="CheckOut Date"
                    aria-label="checkOutDate"
                    min={checkInDate}
                    required="yes"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                />
                <Form.Label className="createLabel"> Number of Guests </Form.Label>
                <Form.Select
                    className="createControl"
                    type="number"
                    placeholder="No. of Guests"
                    aria-label="guestNumber"
                    maxLength='2'
                    required="yes"
                    value={numGuests}
                    onChange={(e) => numOfGuestCheck(e)}>
                        <option>1</option>
                        <option>2</option>
                </Form.Select>
                <Form.Label className="createLabel"> Room Type </Form.Label>
                <Form.Select
                    className="createControl"
                    type="select"
                    placeholder="No. of Guests"
                    aria-label="guestNumber"
                    required="yes"
                    value={roomTypes}
                    onChange={(e) => setRoomTypes(e.target.value)}>
                        {Types()}
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