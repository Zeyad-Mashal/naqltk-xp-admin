import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import { FaUser, FaTruck } from "react-icons/fa";
import { GrUserPolice } from "react-icons/gr";
import avatar from "../../assets/req-ava.jpg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import GetDrivers from "../../Api/Drivers/GetDrivers";
import GetStats from "../../Api/stats/GetStats";
const data = [
  { month: "يناير", profit: 12000 },
  { month: "فبراير", profit: 15000 },
  { month: "مارس", profit: 8000 },
  { month: "أبريل", profit: 17000 },
  { month: "مايو", profit: 20000 },
  { month: "يونيو", profit: 14000 },
  { month: "يوليو", profit: 22000 },
  { month: "أغسطس", profit: 18000 },
  { month: "سبتمبر", profit: 16000 },
  { month: "أكتوبر", profit: 21000 },
  { month: "نوفمبر", profit: 19000 },
  { month: "ديسمبر", profit: 25000 },
];
const Dashboard = () => {
  useEffect(() => {
    getAllDrivers();
    getAllStats();
  }, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [allDrivers, setAllDrivers] = useState([]);
  const [allStats, setAllStats] = useState({});
  const getAllDrivers = () => {
    GetDrivers(setLoading, setError, setAllDrivers);
  };
  const getAllStats = () => {
    GetStats(setLoading, setError, setAllStats);
  };
  return (
    <div className="dashboard">
      <div className="dashboard_container">
        <div className="dashboard_stats">
          <div className="dashboard_stat">
            <div className="users">
              <FaUser />
              <div className="user_data">
                <p>عدد العملاء</p>
                <span>{allStats.totalUsers}</span>
              </div>
            </div>
            <select>
              <option value="يناير">يناير</option>
              <option value="يناير">يناير</option>
              <option value="يناير">يناير</option>
            </select>
          </div>
          <div className="dashboard_stat">
            <div className="users">
              <FaTruck />

              <div className="user_data">
                <p>عدد الرحلات</p>
                <span>{allStats.totalTravels}</span>
              </div>
            </div>
            <select>
              <option value="يناير">يناير</option>
              <option value="يناير">يناير</option>
              <option value="يناير">يناير</option>
            </select>
          </div>
          <div className="dashboard_stat">
            <div className="users">
              <GrUserPolice />

              <div className="user_data">
                <p>عدد السائقين</p>
                <span>{allStats.totalDrivers}</span>
              </div>
            </div>
            <select>
              <option value="يناير">يناير</option>
              <option value="يناير">يناير</option>
              <option value="يناير">يناير</option>
            </select>
          </div>
        </div>
        <div className="dashboard_body">
          <div className="dashboard_drivers">
            <h3>السائقين</h3>
            <div className="drivers_list">
              {loading
                ? "جاري التحميل"
                : allDrivers.map((item, index) => {
                    return (
                      <div className="driver_item" key={index}>
                        <img src={avatar} alt="" />
                        <div className="driver_info">
                          <p>{item.name}</p>
                          <span>#{item.driverId}</span>
                        </div>
                      </div>
                    );
                  })}
            </div>
          </div>
          <div className="income_graph">
            <h2 style={{ textAlign: "right" }}>معدل الأرباح</h2>
            <ResponsiveContainer>
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="#ff4d00"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
