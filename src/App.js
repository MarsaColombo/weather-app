import React from 'react';
import './App.css';
import GetMeteo2 from './components/GetMeteo2';
import GetMeteoWeek2 from './components/GetMeteoWeek2';
import GetMeteoHours from './components/GetMeteoHours';


function App() {
  return (
  <>
  <h1>MeteoConnect</h1>
  <div className='GetMeteo'>
  <GetMeteo2/>
  </div>
  <div className='GetMeteoHours'>
    <GetMeteoHours/>
  </div>
  <div className='GetMeteoWeek'>
  <GetMeteoWeek2/>
  </div>
  </>
  )
}

export default App;
