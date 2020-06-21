import React, { useContext } from 'react';
import { RoomContext } from "../context"
import Loading from '../pages/Loading';
import Room from './Room';
import Title from './Title';



const FeaturedRooms = () => {
    const contextType = useContext(RoomContext);
    
    let { featuredRooms: rooms, loading } = contextType;
    ////////featuredRooms:rooms rename featuredRooms to Rooms
  

    rooms = rooms.map(room => {
        return <Room key={room.id} room={room} />
    });


    return (
        <section className="featured-rooms">
            <Title  title="featured rooms" />
            <div className="featured-rooms-center">
                {loading ? <Loading /> : rooms}
            </div>
        </section>
    )
}
export default FeaturedRooms;