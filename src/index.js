import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './reducers';

// creating a store requires a root reducer function
const store = createStore(rootReducer, composeWithDevTools());

// we need to provide the store to our application so that components
// and pages can access the store

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </Provider>  
  </React.StrictMode>
);

reportWebVitals();
