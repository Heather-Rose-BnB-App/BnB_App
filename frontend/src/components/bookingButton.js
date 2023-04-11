import React from "react";
import { Link } from 'react-router-dom';

import './styles.css';

export class BookingButton extends React.Component {

    render() {


        return (
            <div >
                <Link to="/bookingPage">
                    <button>Book Now</button>
                </Link>
            </div>
        );
    }
}
