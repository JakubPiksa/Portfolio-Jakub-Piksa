import React from 'react';
import { BrowserRouter } from "react-router-dom"; 
import ReactDOM from 'react-dom';
import App from './components/App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename="portfolio-jakub-piksa">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
