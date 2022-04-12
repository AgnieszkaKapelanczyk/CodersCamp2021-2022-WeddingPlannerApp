import React from 'react';
import './index.css';
import App from './components/App/App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "@mui/material/styles"


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);



