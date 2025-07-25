import React, { useState } from "react";
import Auth from "../../Api/Login/Auth";
import "./Login.css";
import loginImage from "../../assets/login.png";
const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = () => {
    const data = {
      email: email,
      password: password,
    };
    Auth(setLoading, setError, data);
  };
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_content">
          <h1>مرحبًا بعودتك 👋</h1>
          <p>مرحبًا بك في لوحة تحكم نقلتي ! يرجى تسجيل الدخول .</p>
          <label>
            <span>البريد الإلكتروني</span>
            <input
              type="text"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span>كلمة المرور</span>
            <input
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {error}
          <button onClick={handleLogin}>
            {loading ? "جاري التحميل..." : "تسجيل الدخول"}
          </button>
        </div>
        <div className="login_img">
          <img src={loginImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
