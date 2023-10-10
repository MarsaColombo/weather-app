import React from "react";
import FetchApi from "./components/FetchApi";
import MeteoSemaine from "./components/MeteoSemaine";
import './Styles/App.css'
import './Styles/index.css'
import LegendeCards from "./components/Legende";



function App() {
  return <div className="tableau">
    <h2>Prévisions météo pour Roubaix</h2>
    <LegendeCards/>
    <FetchApi/>
    <MeteoSemaine/>
  </div>
}



export default App;
