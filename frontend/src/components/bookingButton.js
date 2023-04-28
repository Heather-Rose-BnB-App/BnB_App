import React from "react";
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './styles.css';

// booking button component used on the rooms page
export class BookingButton extends React.Component {

    render() {
        return (
            <div >
                <Link to="/bookingPage" className="booking-button">
                    Book Now
                </Link>
            </div>
        );
    }
}
