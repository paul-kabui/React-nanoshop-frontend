import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import { LocalCartContextProvider } from './store/cart-ctx'

ReactDOM.render(
  <LocalCartContextProvider>
    <BrowserRouter>
		  <App />
    </BrowserRouter>
  </LocalCartContextProvider>,
  document.getElementById('root')
);
