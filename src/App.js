import "./App.css";
import WeekCards from "./components/WeekCards";

import Content from "./components/Content";

// import axios from 'axios';
function App() {
  return (
    <div className=" w-full h-full ">
      <div className="w-full h-full">
        <Content />
        <WeekCards />
      </div>
    </div>
  );
}

export default App;
