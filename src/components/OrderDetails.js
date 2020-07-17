import React from 'react';
import OrderItem from "./OrderItem";
import rawDataJson from "../data/data.js"
import crocs from "../images/crocs.jpeg";
import earphones from "../images/earphones.jpeg";
import cargos from "../images/cargos.jpeg";

const OrderDetails = () => (
    <div className="App-orders-items">
        {
            rawDataJson.orders.map((data, idx) => {
                    if (idx === 0)
                        return <OrderItem uidx={data.uidx} src_img={earphones} location={data.location}/>;
                    else if (idx === 1)
                        return <OrderItem uidx={data.uidx} src_img={crocs} location={data.location}/>;
                    else
                        return <OrderItem uidx={data.uidx} src_img={cargos} location={data.location}/>;
                }
            )
        }
    </div>
);

export default OrderDetails;