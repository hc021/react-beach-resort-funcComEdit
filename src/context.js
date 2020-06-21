// import React, { useState, useEffect, Component } from 'react';
// import items from './data'
// const RoomContext = React.createContext();
// //provide 

// const RoomProvider = (props) => {

//     // const [rooms, setRooms] = useState([]);
//     // const [sortedRooms, setSortedRooms] = useState([]);
//     // const [featuredRooms, setFeaturedRooms] = useState([]);
//     // const [loading, setLoading] = useState(true);
//     // const [type, setType] = useState("all");
//     // const [capacity, setCapacity] = useState(1);
//     // const [price, setPrice] = useState(0);
//     // const [minPrice, setMinPrice] = useState(0);
//     // const [maxPrice, setMaxPrice] = useState(0);
//     // const [minSize, setMinSize] = useState(0);
//     // const [maxSize, setMaxSize] = useState(0);
//     // const [breakfast, setBreakfast] = useState(0);
//     // const [pets, setPets] = useState(false);

//     const [state, setState] = useState({ rooms: [], sortedRooms: [], featuredRooms: [], loading: true, type: "all", capacity: 1 })
//     useEffect(() => {
//         let rooms = formData(items);
//         console.log("room", rooms);

//         let featuredRooms = rooms.filter(room => room.featured === true);
//         //console.log("featureRoom",featuredRooms);
//         let maxPrice = Math.max(...rooms.map(item => item.price));
//         let maxSize = Math.max(...rooms.map(item => item.size));
//         console.log(maxPrice);


//         //filterRooms();
//         // setRooms(rooms);
//         // setFeaturedRooms(featuredRooms);
//         // setSortedRooms(rooms);
//         // setLoading(false);
//         // setMaxPrice(maxPrice);
//         // setMaxSize(maxSize);

//         setState({ ...state, rooms: rooms, sortedRooms: rooms, featuredRooms: featuredRooms, loading: false });

//     }, []);

//     const formData = (items) => {
//         let tempItems = items.map(item => {
//             let id = item.sys.id;
//             let images = item.fields.images.map(image => image.fields.file.url);
//             let room = { ...item.fields, images, id };
//             //"..."this step is create a new object of room and copy from fields
//             return room;
//         })
//         return tempItems;
//     }
//     const getRoom = (slug) => {
//         let tempRoom = [...state.rooms];
//         const room = tempRoom.find(room => room.slug === slug);
//         return room;
//     }

//     const handleChange = (event) => {
//         const target = event.target;
//         const value = target.type === "checkbox" ? target.checked : target.value;
//         const name = target.name;
//         // setType(value, filterRooms(value));
//         setState({ ...state, [name]: value }, filterRooms());
//     }

//     // const handleGuestChange = (event) => {
//     //     const target = event.target;
//     //     const value = target.type === "checkbox" ? target.checked : target.value;
//     //     const name = target.name;
//     //     setCapacity(value, filterRooms(value));

//     // }
//     const filterRooms = () => {
//         let {
//             rooms,
//             type,
//             capacity
//             //price
//             // minSize,
//             // maxSize,
//             // breakfast,
//             // pets
//         } = state;
//         //all the room
//         let tempRooms = [...rooms];
//         console.log("temproom", tempRooms)
//         //transform value
//         console.log("fliterRoom type", type)
//         console.log("fliterRoom capacity", capacity)
//         capacity = parseInt(capacity);

//         if (type !== "all") {
//             tempRooms = tempRooms.filter(room => room.type === type);
//         }
//         if (type !== 1) {
//             tempRooms = tempRooms.filter(room => room.capacity >= capacity)
//         }
//         console.log("result", tempRooms);

//        setState(state.sortedRooms= tempRooms);

//         console.log("result", state.sortedRooms);
//     }

//     return (
//         // <RoomContext.Provider value={{ rooms, sortedRooms, featuredRooms, loading, type, capacity, getRoom, filterRooms, handleChange, handleGuestChange }}>
//         //     {props.children}
//         // </RoomContext.Provider>

//         <RoomContext.Provider value={{ ...state, getRoom, filterRooms, handleChange }}>
//             {props.children}
//         </RoomContext.Provider>
//     )
// }

// const RoomConsumer = RoomContext.Consumer;



// export { RoomProvider, RoomConsumer, RoomContext };
// export function withRoomConsumer(Component) {
//     return function ConsumerWrapper(props) {
//         return <RoomConsumer>
//             {value => <Component{...props} context={value} />}
//         </RoomConsumer>
//     }
// }


import React, { Component } from "react";
//import items from "./data";
import Client from "./Contentful";

// Client.getEntries({
//   content_type: "beachResortRoomExample"
// }).then(response => console.log("api", response.items));



const RoomContext = React.createContext();

export default class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };
  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortRoomExample"
      });
     
      let rooms = this.formatData(response.items);
      let featuredRooms = rooms.filter(room => room.featured === true);
      //
      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms,
        featuredRooms,
        sortedRooms: rooms,
        loading: false,
        //
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
        console.log(error);
    }
  }
  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "beachResortRoom"
  //     });
  //     let rooms = this.formatData(response.items);

  //     let featuredRooms = rooms.filter(room => room.featured === true);
  //     //
  //     let maxPrice = Math.max(...rooms.map(item => item.price));
  //     let maxSize = Math.max(...rooms.map(item => item.size));
  //     this.setState({
  //       rooms,
  //       featuredRooms,
  //       sortedRooms: rooms,
  //       loading: false,
  //       //
  //       price: maxPrice,
  //       maxPrice,
  //       maxSize
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  componentDidMount() {
    this.getData();
    // let rooms = this.formatData(items);
    // let featuredRooms = rooms.filter(room => room.featured === true);
    // //
    // let maxPrice = Math.max(...rooms.map(item => item.price));
    // let maxSize = Math.max(...rooms.map(item => item.size));
    // this.setState({
    //   rooms,
    //   featuredRooms,
    //   sortedRooms: rooms,
    //   loading: false,
    //   //
    //   price: maxPrice,
    //   maxPrice,
    //   maxSize
    // });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }
  getRoom = slug => {
    let tempRooms = [...this.state.rooms];
    const room = tempRooms.find(room => room.slug === slug);
    return room;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterRooms
    );
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    let tempRooms = [...rooms];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }
    // filter by price
    tempRooms = tempRooms.filter(room => room.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );
    //filter by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }
    //filter by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }
    this.setState({
      sortedRooms: tempRooms
    });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };

export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <RoomConsumer>
        {value => <Component {...props} context={value} />}
      </RoomConsumer>
    );
  };
}
