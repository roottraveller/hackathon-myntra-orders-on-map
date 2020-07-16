import React from 'react';
import myntra_header from '../images/myntra-header.png';
import myntra_orders_overview from '../images/orders-overview-panel.png';
import crocs from '../images/crocs.png'
import cargos from '../images/cargos.png'
import Map from './Map'

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <a href="#">
                    <img src={myntra_header} className="App-header-img" alt="logo"/>
                </a>
            </header>

            <div className="App-orders-overview">
                <a href="#">
                    <img src={myntra_orders_overview} className="App-orders-overview-img" alt="logo"/>
                </a>
            </div>

            <div className="App-orders-items">
                <div className="App-orders-item">
                    <div>
                        <a href="#">
                            <img src={crocs} className="App-orders-item-img" alt="logo"/>
                        </a>
                    </div>
                    <Map location={location} zoomLevel="15"/>
                </div>
                <div className="App-orders-item">
                    <div>
                        <a href="#">
                            <img src={cargos} className="App-orders-item-img" alt="logo"/>
                        </a>
                    </div>
                    <Map location={location} zoomLevel="15"/>
                </div>
            </div>

        </div>
    );
}

export default App;

const location = {
    address: 'Myntra Designs Pvt. Ltd., Damodar Tech Park, Bengaluru, Karnataka',
    lat: 12.8923336,
    lng: 77.6394374,
};
