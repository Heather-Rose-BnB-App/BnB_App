import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import './styles.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { HomeCarousel } from '../components/homeCarousel';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <HomeCarousel></HomeCarousel>
                <br/>
                <br />
                <Card className="m-5 border-0 shadow" >
                    <Row className="row">
                        <Col sm={6}>
                            <Card.Img className="cardImg" src="/images/image18.jpg" />
                        </Col>
                        <Col sm={6}>
                            <Card.Body>
                                <Card.Title as="h3">
                                    Welcome To Caheroyan House and Farm
                                </Card.Title>
                                <Card.Text >
                                    Caheroyan House and Farm B&B situated in Athenry just a 5 min walk from the town centre, with bus and train stop to Galway City Centre close to town.  This award-winning farm with its 70 acres of organic farmlands and 30 acres of woodlands is the perfect location. The Restored Manor House offers generously sized en-suite rooms have multi-channel T.V, wifi internet access, hairdryer, tea and coffee making facilities.
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                    <Row className="row">
                        <Col sm={6}>
                            <Card.Body>
                                <Card.Title as="h3">
                                    Bed and Breakfast
                                </Card.Title>
                                <Card.Text >
                            Indulge in our delicious Full Irish breakfast served with Tea or Coffee and a selection of Juices. We also serve a wide range of cereals and fruits. </Card.Text>
                            </Card.Body>
                        </Col>
                        <Col sm={6}>
                            <Card.Img className="cardImg" src="/images/fry.jpg" />
                        </Col>
                    </Row>
                </Card>
            </div>
        );
    }
}