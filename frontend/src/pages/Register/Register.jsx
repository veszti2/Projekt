import React from "react";
import "./Register.css"; // ← ide tedd a korábban küldött CSS-t

export default function Register() {
  return (
    <div className="register-container">
      <h2>Regisztráció</h2>

      <form className="register-form">
        <label htmlFor="username">Felhasználónév</label>
        <input
          type="text"
          id="username"
          placeholder="Add meg a felhasználóneved"
          required
        />

        <label htmlFor="email">E-mail cím</label>
        <input
          type="email"
          id="email"
          placeholder="Add meg az e-mail címed"
          required
        />

        <label htmlFor="password">Jelszó</label>
        <input
          type="password"
          id="password"
          placeholder="Add meg a jelszavad"
          required
        />

        <label htmlFor="confirm-password">Jelszó megerősítése</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Írd be újra a jelszavad"
          required
        />

        <button className="auth-btn" type="submit">
          Fiók létrehozása
        </button>
      </form>

      <p className="auth-switch">
        Már van fiókod? <a href="/login">Jelentkezz be</a>
      </p>
    </div>
  );
}