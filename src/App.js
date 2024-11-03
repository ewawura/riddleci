// src/App.js
import React, { useState } from 'react';
import './App.css';


function App() {
    const [showText, setShowText] = useState(false);

    const onButtonClick = () => {
        setShowText(true);
    };

    return (
        <div className="App">
          <header className="App-header">
            <h1>Welcome to Riddle CI</h1>
            <button className="App-link" onClick={onButtonClick}>Why did the circle bring a friend to the party?</button>
            {showText && <p>To stay well-rounded!</p>}
          </header>
        </div>
    );
}

export default App;
