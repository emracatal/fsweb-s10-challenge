import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

//npm install react-redux redux
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { reducer } from "./reducers";

//npm install --save @redux-devtools/extension
import { composeWithDevTools } from "@redux-devtools/extension";

//npm i --save redux-logger
import logger from "redux-logger";
//npm install redux-thunk
import thunk from "redux-thunk";

//npm install --save react-toastify
//import { ToastContainer } from "react-toastify";
//import "react-toastify/dist/ReactToastify.css";

//npm install axios //taşınacak
import axios from "axios";

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <>
        <App />
      </>
    </BrowserRouter>
  </Provider>
);

// axios.get('/user', {
//   params: {
//     ID: 12345
//   }
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// })
// .finally(function () {
//   // always executed
// });
