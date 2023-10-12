import React from 'react';
import './App.css';
import GetMeteo2 from './components/GetMeteo2';
import GetMeteoWeek2 from './components/GetMeteoWeek2';


function App() {
  return (
  <>
  <div className='GetMeteo'>
  <GetMeteo2/>
  </div>
  <div className='GetMeteoWeek'>
  <GetMeteoWeek2/>
  </div>
  </>
  )
}

export default App;
