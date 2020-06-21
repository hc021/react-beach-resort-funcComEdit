import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomContainer from '../components/RoomContrainer';





const Rooms = () => {
    return (
        <>
            <Hero hero="roomsHero">
                <Banner title="Our Rooms">
                    <Link to="/" className="btn-primary">return Home</Link>
                </Banner>

            </Hero>
            <RoomContainer></RoomContainer>
        </>
    )
}


export default Rooms;