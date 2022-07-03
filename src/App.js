import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Routing from './Routing';

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  );
}

export default App;
