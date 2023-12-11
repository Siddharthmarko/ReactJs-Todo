import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './Todo';
import './Style.css';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
        <Todo />
    </React.StrictMode>
);