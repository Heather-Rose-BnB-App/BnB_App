import React, { useState } from "react";
import { NavBar } from '../components/navBar'
import './styles.css';

const BookingForm = () => {
    const [checkInDate, setCheckInDate] = useState('');
    const [checkOutDate, setCheckOutDate] = useState('');
    const [numGuests, setNumGuests] = useState(1);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const verb = NavBar.state;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(verb);
        // add your booking submission logic here
        alert('Booking submitted successfully!');
    };

    return (
        <div className="booking-form-container">
            <h2>Make a Booking</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="check-in-date">Check-in Date</label>
                    <input type="date" id="check-in-date" value={checkInDate} onChange={(e) => setCheckInDate(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="check-out-date">Check-out Date</label>
                    <input type="date" id="check-out-date" value={checkOutDate} onChange={(e) => setCheckOutDate(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="num-guests">Number of Guests</label>
                    <input type="number" id="num-guests" min="1" max="10" value={numGuests} onChange={(e) => setNumGuests(parseInt(e.target.value))} required />
                </div>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
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