import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Register from "./Components/Register";
import Prueba from "./Components/Prueba";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Prueba" element={<Prueba />} />
      </Routes>
    </Router>
  );
}

export default App;
