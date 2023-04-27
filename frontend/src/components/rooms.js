import React from "react";

import './styles.css';
import { BookingButton } from "./bookingButton";
import { Button } from 'react-bootstrap';



export class Rooms extends React.Component {

    render() {
  

        return (
                     <div className="room-container">
                <h1>Rooms</h1>
                <Button href="/bookingPage">Book Now</Button>
                
                <div className="room-gallery">
                    <div className="room-card">
                        <img src="/images/room1.jpg" alt="Room 1" />
                        <h3>Birch Room</h3>
                        <p>Our Double Room is a cozy retreat with a comfortable
                            double bed, perfect for couples or solo travelers.</p>
                    </div>
                    <div className="room-card">
                        <img src="/images/room2.jpg" alt="Room 2" />
                        <h3>Ash Room</h3>
                        <p>Our Twin Room features two comfortable single beds.</p>
                    </div>
                    <div className="room-card">
                        <img src="/images/room3.jpg" alt="Room 3" />
                        <h3>Oak Room</h3>
                        <p>Our Double Room is a spacious and elegantly
                            furnished room with a comfortable double bed.</p>
                    </div>
                    <div className="room-card">
                        <img src="/images/room4.jpg" alt="Room 4" />
                        <h3>Sycamore Room</h3>
                        <p>Our Double Room is a charming room with a
                            comfortable double bed and beautiful views of the
                            surrounding countryside.</p>
                    </div>
                </div>
            </div>
            
            
            
        );
    }
}
