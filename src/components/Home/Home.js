import React from 'react';
import Booking from '../Booking/Booking';
import Contact from '../Contact/Contact';
import Banner from './Banner/Banner';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Booking></Booking>
            <Contact></Contact>
        </div>
    );
};

export default Home;