import { history as hs } from "context/history";

import "index.css";
import "primeflex/primeflex.css";
import "primeflex/themes/primeone-light.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-light-blue/theme.css"; // hoặc dark
// hoặc dark
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import CustomRouter from "./routers/CustomRouter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.Fragment>
    <CustomRouter history={hs}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </CustomRouter>
  </React.Fragment>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
