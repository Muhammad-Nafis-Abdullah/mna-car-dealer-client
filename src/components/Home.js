import React from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from '../images/slide-1.jpg';
import slide2 from '../images/slide-2.jpg';
import slide3 from '../images/slide-3.jpg';
import useFetch  from '../hooks/useFetch';
import ItemsCard from './ItemsCard';


const Home = () => {
    const items = useFetch('https://arcane-shore-09021.herokuapp.com/inventories')

    return (
        <section className='fadeIn'>
            
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

            <h1 className='text-center mt-5 mb-2 underline underline-offset-8'>Inventory</h1>
            <div className='flex justify-center gap-3 container my-3 flex-wrap item-container'>
                {
                    items.slice(0,5).map(item => <ItemsCard key={item._id} item={item}/>)
                }
            </div>

            <h2 className='mt-5 text-center mb-3 underline underline-offset-2 '>Additional</h2>
            <div className="extra">
                <h5 className='text-center'>Nissan Warehouse</h5>
                <address>Halishahar, K-block R/A , Road No. 05 </address>
                <p>Telephone : 03148579325</p>
            </div>
            <div className="extra">
                <h5 className='text-center'>Toyota Warehouse</h5>
                <address>Nasirabad, Hillview R/A , Road No. 15 </address>
                <p>Telephone : 03148579375</p>
            </div>

        </section>
    );
};

export default Home;