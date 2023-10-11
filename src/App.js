import "./App.css";
import Content from "./components/Content";
import WeekCards from "./components/WeekCards";

// import axios from 'axios';
function App() {
  return (
    <div className="h-full w-full scroll-container">
      <Content className="section-scroll" />
      <WeekCards className="section-scroll" />
    </div>
  );
}

export default App;
