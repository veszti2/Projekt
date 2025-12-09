import React from 'react';
import './userProfile.css';
import { useState, useEffect } from 'react';

const userProfile = {
    name: 'Gipsz Jakab',
    title: 'Frontend Fejlesztő',
    location: 'Budapest, Magyarország',
    email: 'gipsz.jakab@pelda.hu',
    phone: '+36 30 123 4567',
    bio: 'Több éves tapasztalattal rendelkező, szenvedélyes frontend fejlesztő, főként React, Next.js és modern CSS technológiákkal. Szeretek új dolgokat tanulni és nyílt forráskódú projektekben részt venni.',
    skills: [
        'React',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3 / Sass',
        'Node.js',
        'Git / GitHub',
        'TypeScript',
    ],
    profilePictureUrl: 'https://via.placeholder.com/150', // Helyőrző kép
};

function UserProfile() {
    // const [user, setUser] = useState({});
    const [reservations, setReservations] = useState([]);

    // useEffect(() => {}, []);

    useEffect(() => {
        const userL = JSON.parse(localStorage.getItem('user'));
        console.log(userL);

        try {
            const leker = async () => {
                const response = await fetch(
                    `http://localhost:3500/api/users-frontend/`
                );

                const valasz = await response.json();

                if (response.ok) {
                    // const usersF = valasz.users;
                    const reservationsF = valasz.reservations;
                    // console.log(usersF);
                    console.log(reservationsF);
                    // console.log(user);

                    const reser = reservationsF.filter((elem) => {
                        return elem.user._id === userL._id;
                    });
                    console.log(reser);
                    setReservations(reser);
                }
            };

            leker();
        } catch (error) {
            console.log(error.message);
        }
    }, []);
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
            {reservations.map((elem) => {
                return (
                    <div
                        className="idopont-kontener"
                        key={elem._id}
                    >
                        <h1>Edző: {elem.trainer.nev}</h1>
                        <p>Időpont: {elem.idopont}</p>
                        <img
                            src={elem.trainer.kep}
                            alt=""
                        />
                        <button>Lemond</button>
                    </div>
                );
            })}
            <div className="profile-content">
                <section className="profile-section">
                    <h3 className="section-title">Rólam</h3>
                    <p className="profile-bio">{userProfile.bio}</p>
                </section>

                <section className="profile-section">
                    <h3 className="section-title">Kapcsolat</h3>
                    <ul className="contact-list">
                        <li>
                            <strong>Email:</strong>{' '}
                            <a href={`mailto:${userProfile.email}`}>
                                {userProfile.email}
                            </a>
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
                            <li
                                key={index}
                                className="skill-item"
                            >
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
