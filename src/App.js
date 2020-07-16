import React from 'react';
import Header from "./components/Header";
import OrderPanel from "./components/OrderPanel";
import OrderDetails from "./components/OrderDetails";

function App() {
    return (
        <div className="App">

            <Header/>
            <OrderPanel/>
            <OrderDetails/>

        </div>
    );
}

export default App;