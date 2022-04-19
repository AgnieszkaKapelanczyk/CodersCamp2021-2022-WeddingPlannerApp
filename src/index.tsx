import React from 'react';
import './index.css';
import '/node_modules/react-grid-layout/css/styles.css';
import '/node_modules/react-resizable/css/styles.css';
import App from './components/App/App';
import { store } from './store/store';
import { Provider } from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "@mui/material/styles"
import { theme } from './theme/theme';


const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
    </ThemeProvider>
  </React.StrictMode>,
);