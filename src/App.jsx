import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Drivers from "./pages/Drivers/Drivers";
import Customers from "./pages/Customers/Customers";
import Header from "./components/Header/Header";
import "./App.css";
import Request from "./pages/Request/Request";
import Login from "./pages/Login/Login";
function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <div className="header_content">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/requests" element={<Request />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
