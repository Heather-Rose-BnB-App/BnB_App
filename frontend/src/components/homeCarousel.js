import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';

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
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className=" img-in-carousel d-block w-100"
                        src="/images/image23.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" img-in-carousel d-block w-100"
                        src="/images/image24.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
}
export default HomeCarousel