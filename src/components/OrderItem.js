import React from 'react';
import Map from "./Map";

const OrderItem = (props) => (
    <div className="App-orders-item">
        <div>
            <a href="#">
                <img src={props.src_img} className="App-orders-item-img" alt="logo"/>
            </a>
        </div>
        <Map location={props.location} zoomLevel={15}/>
    </div>
);

export default OrderItem;