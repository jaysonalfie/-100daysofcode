import React from "react";
import { ReactDOM } from "react";
import {createRoot} from 'react-dom/client'
import App from './components/App';


/*
getting search term to make a request to an outside API
Learn how to
handle search terms, user input and fetching data
components - app, searchInput, imageList
*/


const root = createRoot(document.getElementById('root'));
root.render(<App/>);