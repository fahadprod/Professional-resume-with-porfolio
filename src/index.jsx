import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import { BrowserRouter as Router } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <Router>
        <App />
    </Router>
    ,
    document.getElementById('main'));