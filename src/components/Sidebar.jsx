import React from "react";
import {
  FaTachometerAlt,
  FaUsers,
  FaTruck,
  FaSignOutAlt,
  FaClipboardList,
  FaComments,
  FaUserCog,
  FaUserShield,
  FaQuestionCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png"; // حط اللوجو بتاعك هنا

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* اللوجو */}
      <div className="logo">
        <img src={logo} alt="نقلتي" />
      </div>

      {/* اللينكات */}
      <ul className="menu-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaTachometerAlt /> لوحة التحكم
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/drivers"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaTruck /> السائقين
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/requests"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaClipboardList /> طلبات الانضمام
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/customers"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUsers /> العملاء
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trips"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaTruck /> الرحلات
          </NavLink>
        </li>
      </ul>

      {/* تسجيل الخروج */}
      <div className="logout">
        <NavLink to="/help">
          <FaQuestionCircle /> مساعدة
        </NavLink>
        <NavLink to="/logout">
          <FaSignOutAlt /> تسجيل الخروج
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
