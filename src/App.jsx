import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Register from "./Components/Register";
import Crud from "./Components/Crud/Crud";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Crud />} />

      </Routes>
    </Router>
  );
}

export default App;
