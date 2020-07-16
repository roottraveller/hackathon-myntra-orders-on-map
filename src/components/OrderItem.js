import React from 'react';
import Map from "./Map";

const OrderItem = (props) => (
    <div className="App-orders-item">
        <a href="#">
            <img src={props.src_img} className="App-orders-item-img" alt="logo"/>
        </a>

        <div>
            {/*<a href={`#` + props.uidx} data-toggle="collapse">{props.location.address.substring(0, 20)}...</a>*/}
            <a href={`#` + props.uidx} data-toggle="collapse">location</a>
        </div>
        <div id={props.uidx} className="collapse">
            <Map location={props.location} zoomLevel={15}/>
        </div>
    </div>
);

export default OrderItem;