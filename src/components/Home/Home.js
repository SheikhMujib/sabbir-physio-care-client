import React from 'react';
import Booking from '../Booking/Booking';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Booking></Booking>
        </div>
    );
};

export default Home;