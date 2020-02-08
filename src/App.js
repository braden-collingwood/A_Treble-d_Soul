import React from 'react';
import logo from './logo.svg';
import './App.css';
import Startup from './components/Startup/Startup';


function App() {

  const exampleFunc = new function(){

    return(
      <Startup></Startup>
    )
  }

  return (
    <div className="App">
      <Startup></Startup>
    </div>
  );
}

export default App;
