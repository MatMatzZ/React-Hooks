import React from 'react';
import './App.css';
import HooksCounter from './components/HooksCounter';
import HooksCounterTwo from './components/HooksCounterTwo';
import HooksCounterThree from './components/HooksCounterThree';
import HooksCounterFour from './components/HooksCounterFour';

function App() {
  return (
    <div className="App">
      {/* <HooksCounter/> */}
      {/* <HooksCounterTwo/> */}
      {/* <HooksCounterThree/> */}
      <HooksCounterFour/>
    </div>
  );
}

export default App;
