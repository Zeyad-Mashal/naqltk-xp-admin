import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard/Dashboard";
import Drivers from "./pages/Drivers/Drivers";
import Customers from "./pages/Customers/Customers";
import Header from "./components/Header/Header";
import "./App.css";
import Request from "./pages/Request/Request";
import Login from "./pages/Login/Login";
import Trips from "./pages/Trips/Trips";
import Wallet from "./pages/Wallet/Wallet";
function App() {
  const isAuth = localStorage.getItem("naqltkxp-token");
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <div className="header_content">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={isAuth ? <Dashboard /> : <Login />} />
            <Route
              path="/dashboard"
              element={isAuth ? <Dashboard /> : <Login />}
            />
            <Route path="/drivers" element={isAuth ? <Drivers /> : <Login />} />
            <Route
              path="/customers"
              element={isAuth ? <Customers /> : <Login />}
            />
            <Route
              path="/requests"
              element={isAuth ? <Request /> : <Login />}
            />
            <Route path="/trips" element={isAuth ? <Trips /> : <Login />} />
            <Route
              path="/wallet/:driverId"
              element={isAuth ? <Wallet /> : <Login />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
