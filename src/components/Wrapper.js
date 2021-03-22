import React from "react";
import { Provider } from "react-redux";
import App from "./../App";
import Store from "./../store/Store";


const Wrapper = () =>{
    return (
        <Provider store={Store}>
            <App />
        </Provider>
    )
}

export default Wrapper;