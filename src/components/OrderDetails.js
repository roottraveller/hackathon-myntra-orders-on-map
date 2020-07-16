import React from 'react';
import crocs from "../images/crocs.png";
import OrderItem from "./OrderItem";
import rawDataJson from "../data/data.json"

const OrderDetails = () => (
    <div className="App-orders-items">
        {
            rawDataJson.orders.map((data) => {
                return <OrderItem uidx={data.uidx} src_img={crocs} location={data.location}/>
            })
        }
    </div>
);

export default OrderDetails;