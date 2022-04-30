import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../images/slide-1.jpg';
import slide2 from '../images/slide-2.jpg';
import slide3 from '../images/slide-3.jpg';


const Home = () => {
    return (
        <section>
            
            <Carousel>
                <Carousel.Item>
                    <img
                        className="slide"
                        src={slide1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slide"
                        src={slide2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slide"
                        src={slide3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>

            

        </section>
    );
};

export default Home;