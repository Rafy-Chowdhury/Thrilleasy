import React from 'react';
import { Col, Row, Carousel } from 'react-bootstrap';
import boat from '../../Images/boat.jpg';
import p1 from '../../Images/p1.jpg';
import p2 from '../../Images/p2.jpg';
import time from '../../Images/time.png';
import star from '../../Images/star.png';
import location from '../../Images/location.png';
import car from '../../Images/car.png';
import meals from '../../Images/meals.png';
import cash from '../../Images/cash.png';
import guide from '../../Images/guide.png';
import './MainPart.css';

const MainPart = () => {
    return (
        <>
            <Row>
                <Col md={6} sm={12}>
                     <Carousel fade>
                        <Carousel.Item>
                            <img style={{height: '500px'}}
                            className="d-block w-100"
                            src={boat}
                            alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{height: '500px'}}
                            className="d-block w-100"
                            src={p1}
                            alt="Second slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img style={{height: '500px'}}
                            className="d-block w-100"
                            src={p2}
                            alt="Third slide"/>
                        </Carousel.Item>
                        </Carousel>
                </Col>
                <Col md={6} sm={12}>
                <div className="ml-2"><h2>River Rafting on Indus River</h2></div>
                <div className="d-flex ">
                    <div className="mr-auto">
                    <img style={{width: '200px'}} src={star} alt="" />
                    </div>
                    <div className="mt-2">
                    <img style={{width: '130px'}} src={time} alt="" />
                    <img style={{width: '100px'}} src={location} alt="" /></div>
                </div>
                <div className="ml-3">
                    <p  style={{fontWeight: 'lighter'}}>Starting from INR <del>199,900</del></p>
                    <h1>INR 13800</h1>
                    <h2>Per Adult</h2>
                </div>
                <div>
                    <button className="button">Book Now</button>
                </div>
                
                <div className="grid-container">
                    <img className="images" src={car} alt="car" />
                    <img className="images" src={meals} alt="car" />
                    <img className="images" src={cash} alt="car" />
                    <img className="images" src={guide} alt="car" />
                </div>
                
                </Col>
            </Row>
        </>
    );
};

export default MainPart;