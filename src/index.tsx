import React from "react";
import ReactDOM from "react-dom/client";
import BarChart from "./BarChart";

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(
    <React.StrictMode>
        <BarChart id="main"/>
    </React.StrictMode>
);