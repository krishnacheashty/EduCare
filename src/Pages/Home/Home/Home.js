import React from 'react';
import Banner from '../Banner/Banner';
import Principal from '../Principal/Principal';
import Reviews from '../Reviews/Reviews';
import Subscription from '../Subscription/Subscription';
import Teachers from '../Teachers/Teachers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Principal></Principal>
            <Teachers></Teachers>
            <Reviews></Reviews>
            <Subscription></Subscription>

        </div>
    );
};

export default Home;