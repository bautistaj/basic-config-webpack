import React from 'react';
import './styles/App.css';
import spinner from '../images/spin.svg';

function App(){
    return (
        <div className = "container">
            <div className = "app">
                <h1>React</h1>
                <img src = { spinner } alt = "spin"/>
            </div>
        </div>
    );
}

export default App;