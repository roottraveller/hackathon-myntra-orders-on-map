import React from 'react';
import Map from "./Map";
import ImageRenderer from "./ImageRenderer";


const OrderItem = (props) => (
    <div className="App-orders-item">
        <ImageRenderer src_img={props.src_img}/>

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