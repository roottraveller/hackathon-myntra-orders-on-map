import React from 'react';
import myntra_orders_overview from "../images/orders-overview-panel.png";

const OrderPanel = () => (
    <div className="App-orders-overview">
        <a href="#">
            <img src={myntra_orders_overview} className="App-orders-overview-img" alt="logo"/>
        </a>
    </div>
);

export default OrderPanel;