import React from "react";
import { Link } from 'react-router-dom';
import {Button} from 'react-bootstrap';
import './styles.css';

export class BookingButton extends React.Component {

    render() {
        return (
            <div >
                <Link to="/bookingPage">
                    <Button href="/bookingPage">Book Now</Button>
                </Link>
            </div>
        );
    }
}
