import React from 'react';
import Map from "./Map";
import crocs from "../images/earphones.jpeg";


const OrderItem = (props) => (
    <div className="App-orders-item">
        <a href="#">
            <img src={crocs} className="App-orders-item-img" alt="logo"/>
            {/*<img src={require('../images/' + props.src_img + '.png')} className="App-orders-item-img" alt="logo"/>*/}
        </a>

        <div>
            {/*<a href={`#` + props.uidx} data-toggle="collapse">{props.location.address.substring(0, 20)}...</a>*/}
            <a href={`#` + props.uidx} data-toggle="collapse">Track order location</a>
        </div>
        <div id={props.uidx} className="collapse">
            <Map location={props.location} zoomLevel={15}/>
        </div>
    </div>
);

export default OrderItem;