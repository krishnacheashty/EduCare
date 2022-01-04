import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import "./Banner.css"

const Banner = () => {
    return (
        <div>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://limpidthemes.com/Themeforest/html/Pathshala/Pathshala-HTML/assets/img/slider/slide6.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4><i className="fas fa-book-open me-3"></i>WE ARE BEST<i className="fas fa-book-open ms-3"></i></h4>
                        <h3>LET YOUR CHILD <span className='text-success'>GROW</span></h3>
                        <p style={{marginLeft: "26%"}}>We here at EduCare provides best education to your little one</p>
                        <Button variant="outline-info"><i className="fas fa-mouse-pointer"></i> KNOW MORE</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://limpidthemes.com/Themeforest/html/Pathshala/Pathshala-HTML/assets/img/slider/slide4.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h4><i className="fas fa-book-open me-3"></i>WE ARE BEST<i className="fas fa-book-open ms-3"></i></h4>
                        <h3>CHOOSE <span className='text-success'>BEST</span> FOR YOUR CHILD </h3>
                        <p style={{marginLeft: "26%"}}>We here at EduCare provides best education to your little one</p>
                        <Button variant="outline-info"> <i className="fas fa-mouse-pointer"></i> KNOW MORE</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="http://limpidthemes.com/Themeforest/html/Pathshala/Pathshala-HTML/assets/img/slider/slide5.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h4><i className="fas fa-book-open me-3"></i>WE ARE BEST<i className="fas fa-book-open ms-3"></i></h4>
                        <h3>GIVE <span className='text-success'>BOOST</span> TO YOUR CHILD</h3>
                        <p style={{marginLeft: "26%"}}>We here at EduCare provides best education to your little one</p>
                        <Button variant="outline-info"><i className="fas fa-mouse-pointer"></i> KNOW MORE</Button>{' '}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

        </div >
    );
};

export default Banner;