import React from "react";
// import { ReactDOM } from "react";
import {createRoot}  from 'react-dom/client'
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/rootReducer";



const store = createStore(rootReducer);


const root = createRoot(document.getElementById('root'))
root.render(<Provider store = {store}><App/></Provider>)