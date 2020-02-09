import React from 'react';
import './App.css';
import Startup from './components/Startup/Startup';
import Background from './components/Background/Background';

function App() {

  const exampleFunc = new function(){

    return(
      <div>
        <Background></Background>
        <Startup />
      </div>
    )
  }

  return (
    <div className="App">
      <Background></Background>
      <Startup />
    </div>
  );
}

export default App;
