import React from 'react';
import Navbar from './Navbar';
import './userProfile.css';

const userProfile = {
  name: "Gipsz Jakab",
  title: "Frontend Fejlesztő",
  location: "Budapest, Magyarország",
  email: "gipsz.jakab@pelda.hu",
  phone: "+36 30 123 4567",
  bio: "Több éves tapasztalattal rendelkező, szenvedélyes frontend fejlesztő, főként React, Next.js és modern CSS technológiákkal. Szeretek új dolgokat tanulni és nyílt forráskódú projektekben részt venni.",
  skills: ["React", "JavaScript (ES6+)", "HTML5", "CSS3 / Sass", "Node.js", "Git / GitHub", "TypeScript"],
  profilePictureUrl: "https://via.placeholder.com/150", // Helyőrző kép
};

function UserProfile() {
  return (
    <div className="profile-container">
      <header className="profile-header">
        <img
          src={userProfile.profilePictureUrl}
          alt={`Profilkép - ${userProfile.name}`}
          className="profile-pic"
        />
        <h1 className="profile-name">{userProfile.name}</h1>
        <h2 className="profile-title">{userProfile.title}</h2>
        <p className="profile-location">
          <em>{userProfile.location}</em>
        </p>
      </header>
      
      <div className="profile-content">
        <section className="profile-section">
          <h3 className="section-title">Rólam</h3>
          <p className="profile-bio">{userProfile.bio}</p>
        </section>

        <section className="profile-section">
          <h3 className="section-title">Kapcsolat</h3>
          <ul className="contact-list">
            <li>
              <strong>Email:</strong> <a href={`mailto:${userProfile.email}`}>{userProfile.email}</a>
            </li>
            <li>
              <strong>Telefon:</strong> {userProfile.phone}
            </li>
          </ul>
        </section>

        <section className="profile-section">
          <h3 className="section-title">Képességek</h3>
          <ul className="skills-list">
            {userProfile.skills.map((skill, index) => (
              <li key={index} className="skill-item">
                {skill}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default UserProfile;