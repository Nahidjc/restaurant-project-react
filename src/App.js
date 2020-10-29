import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Maincomponents from './components/Maincomponents';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Maincomponents />
      </BrowserRouter>

    </div>
  );
}

export default App;
