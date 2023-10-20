
import './App.css';
import Weather from './Components/Pages/Weather';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Weather/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
