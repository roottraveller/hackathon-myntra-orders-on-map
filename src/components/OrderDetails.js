import React from 'react';
import OrderItem from "./OrderItem";
import rawDataJson from "../data/data.json"

const OrderDetails = () => (
    <div className="App-orders-items">
        {
            rawDataJson.orders.map((data) => {
                return <OrderItem uidx={data.uidx} src_img={data.orderInfo} location={data.location}/>
            })
        }
    </div>
);

export default OrderDetails;