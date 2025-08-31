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
import Withdraw from "./pages/Withdraw/Withdraw";

function App() {
  const isAuth = Boolean(localStorage.getItem("naqltkxp-token"));

  return (
    <Router>
      <div className={isAuth ? "app-container" : ""}>
        {/* Render Sidebar only if authenticated */}
        {isAuth && <Sidebar />}

        <div className="content">
          {/* Render Header only if authenticated */}
          {isAuth && (
            <div className="header_content">
              <Header />
            </div>
          )}

          <Routes>
            {/* Public route for Login */}
            <Route path="/login" element={<Login />} />

            {/* Protected routes: if not authed, show Login */}
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
              path="/withdraw"
              element={isAuth ? <Withdraw /> : <Login />}
            />
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
