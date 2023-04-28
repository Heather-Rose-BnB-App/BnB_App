import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';
import { Button } from "bootstrap";

export class HomeCarousel extends React.Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item interval={3000}>
                    <img
                        className="img-in-carousel d-block w-100"
                        src="/images/image2.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                       
                        <p>Experience the beauty of Caheroyan House and Farm with our stunning views and peaceful surroundings</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className=" img-in-carousel d-block w-100"
                        src="/images/image23.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        
                        <p>Relax and unwind in our comfortable and inviting guest rooms, complete with modern amenities</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" img-in-carousel d-block w-100"
                        src="/images/image24.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        
                        <p>
                            Book your stay at Caheroyan House and Farm today and start planning your unforgettable Irish getaway
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default HomeCarousel