import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from "react-redux"
import {configStore} from "./redux/configStore"
<link href='https://fonts.googleapis.com/css?family=Raleway' rel='stylesheet'/>


const root = ReactDOM.createRoot(document.getElementById('root'));

const localstore=configStore()
root.render(
  <React.StrictMode>
    <Provider store={localstore}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
