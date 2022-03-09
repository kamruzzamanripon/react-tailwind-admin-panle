import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import './css/style.scss';
import AppRoute from "./route/AppRoute";

function App() {
  
  
  return (
    <div className="App">
      <Router>
          <AppRoute />
      </Router>
    </div>
  );
}

export default App;
