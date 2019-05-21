import React from 'react';
import './styles/App.css';
import spin from '../images/spin.svg';

function App(){
    return (
        <div className = "container">
            <div className = "app">
                <h1>bautistaj</h1>
                <img src = {spin} alt = "spin"/>
            </div>
        </div>
    );
}

export default App;