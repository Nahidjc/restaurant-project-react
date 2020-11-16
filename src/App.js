import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Maincomponents from './components/Maincomponents';
import myStore from './redux/store';

function App() {
  console.log("APP.JS ", myStore.getState());
  return (
    <div className="App">
      <Provider store={myStore}>
        <BrowserRouter>
          <Maincomponents />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
