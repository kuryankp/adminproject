import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Info from "./components/info/info"
import Pgadmin from "./components/pgadmin/pgadmin"
import {Home} from "./components/home/home"

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}>
                <Route path="" element={<Home/>}/>
                <Route path="info" element={<Info/>}/>
                <Route path="pgadmin" element={<Pgadmin/>}/>
            </Route>
        </Routes>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
