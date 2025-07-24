import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="search-box">
        <input type="text" placeholder="ابحث هنا" />
      </div>
      <div className="icons">
        <span>🔔</span>
        <span>📅</span>
        <span>⚙️</span>
      </div>
      <div className="user-info">
        <span>ادمن</span>
        <p>احمد ابراهيم</p>
      </div>
    </div>
  );
};

export default Header;
