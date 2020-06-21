import React from 'react';
import { withRoomConsumer } from '../context';
import Loading from '../pages/Loading';
import RoomsList from './RoomsList';
import RoomsFilter from './RoomsFilter';


const RoomContainer = ({ context }) => {
    const { loading, sortedRooms, rooms } = context;
    
   
    if (loading) {
        return <Loading />;
    }
    return (
        <>
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms.reverse()} />
        </>
    )
};


export default withRoomConsumer(RoomContainer);
































// import React from 'react';
// import RoomsList from './RoomsList';
// import RoomsFliter from './RoomsFilter';
// import { RoomConsumer } from '../context'
// import Loading from '../pages/Loading'



// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {(value) => {
//                 //console.log(value);
//                 const {loading, sortedRoom, rooms} = value;


//             if (loading) {
//                 return <Loading/>;
//                 }
//                 return (
//                     <div>
//                         Hello Froms Rooms Container

//                         <RoomsFliter rooms ={rooms}></RoomsFliter>
//                         <RoomsList rooms={sortedRoom}></RoomsList>
//                     </div>
//                 )
//             }}
//         </RoomConsumer>

//     )
// }

// export default RoomContainer;