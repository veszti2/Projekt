import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Bejelentkezési adatok:", formData);
  };

  return (
    <div className="login-container">
      <h2>Bejelentkezés</h2>

      <form onSubmit={handleSubmit} className="login-form">
        <label>Email cím</label>
        <input
          type="email"
          name="email"
          placeholder="Add meg az email címed"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Jelszó</label>
        <input
          type="password"
          name="password"
          placeholder="Add meg a jelszót"
          value={formData.password}
          onChange={handleChange}
          required
        />

        {/* Elfelejtett jelszó */}
        <div className="forgot-password">
          <a href="/forgot-password">Elfelejtetted a jelszavad?</a>
        </div>

        <button type="submit" className="btn-primary login-btn">
          Belépés
        </button>
      </form>

      <p className="login-switch">
        Nincs még fiókod? <a href="/register">Regisztrálj</a>
      </p>
    </div>
  );
};

export default Login;