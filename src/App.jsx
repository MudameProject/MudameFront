import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Register from "./Components/Register";
import LoginUser from "./Components/LoginUser";
import RegisterClient from "./Components/RegisterClient";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/RegisterClient" element={<RegisterClient />} />
        <Route path="/LoginUser" element={<LoginUser />} />
      </Routes>
    </Router>
  );
}

export default App;
