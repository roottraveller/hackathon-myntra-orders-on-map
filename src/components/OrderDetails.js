import React from 'react';
import crocs from "../images/crocs.png";
import cargos from "../images/cargos.png";
import OrderItem from "./OrderItem";

const location = {
    address: 'Myntra Designs Pvt. Ltd., Damodar Tech Park, Bengaluru, Karnataka',
    lat: 12.8923336,
    lng: 77.6394374,
};


const OrderDetails = () => (
    <div className="App-orders-items">

        <OrderItem src_img={crocs} location={location}/>
        <OrderItem src_img={cargos} location={location}/>

    </div>
);

export default OrderDetails;