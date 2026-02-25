import { useContext } from 'react';
import './userProfile.css';
import { useState, useEffect, useRef } from 'react';
import { logoContext } from '../App';

// -------------------------------------------------------------
// 🏋️‍♀️ AVATÁR ADATOK (Edzés Témájú Rajzolt Ikonok)
// -------------------------------------------------------------

const FEMALE_AVATARS = [
    { id: 'f_1', gender: 'female', name: 'Női jóga/meditáció', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067825.png' },
    { id: 'f_2', gender: 'female', name: 'Női súlyzós edzés', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067838.png' },
    { id: 'f_3', gender: 'female', name: 'Női fitness labda', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067827.png' },
    { id: 'f_4', gender: 'female', name: 'Női ugrókötél', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067831.png' },
    { id: 'f_5', gender: 'female', name: 'Női kerékpározás', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067834.png' },
    { id: 'f_6', gender: 'female', name: 'Női futás', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067845.png' },
    { id: 'f_7', gender: 'female', name: 'Női Boksz/Harc', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067828.png' },
    { id: 'f_8', gender: 'female', name: 'Női sportruházat', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067836.png' },
    { id: 'f_9', gender: 'female', name: 'Női stretching', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067837.png' },
    { id: 'f_10', gender: 'female', name: 'Női erőedzés', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067830.png' },
];

const MALE_AVATARS = [
    { id: 'm_1', gender: 'male', name: 'Férfi súlyzós edzés', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067840.png' },
    { id: 'm_2', gender: 'male', name: 'Férfi futás', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067841.png' },
    { id: 'm_3', gender: 'male', name: 'Férfi erősember/emelés', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067843.png' },
    { id: 'm_4', gender: 'male', name: 'Férfi boksz/harc', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067844.png' },
    { id: 'm_5', gender: 'male', name: 'Férfi súlyemelés', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067851.png' },
    { id: 'm_6', gender: 'male', name: 'Férfi evezés/úszás', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067847.png' },
    { id: 'm_7', gender: 'male', name: 'Férfi labdajáték', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067846.png' },
    { id: 'm_8', gender: 'male', name: 'Férfi kettlebell', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067849.png' },
    { id: 'm_9', gender: 'male', name: 'Férfi plank/álló edzés', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067850.png' },
    { id: 'm_10', gender: 'male', name: 'Férfi dinamikus mozgás', url: 'https://cdn-icons-png.flaticon.com/512/3067/3067852.png' },
];

const MALE_AVATAR_COUNT = MALE_AVATARS.length;
const FEMALE_AVATAR_COUNT = FEMALE_AVATARS.length;

const initialUserProfileStatic = {
    name: 'Felhasználó',
    title: 'Frontend Fejlesztő',
    location: 'Budapest, Magyarország',
    email: 'roman.talp@pelda.hu',
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
    profilePictureUrl: MALE_AVATARS[0].url,
};

function UserProfile() {
    const [user, setUser] = useState({});
    const [reservations, setReservations] = useState([]);
    const [initialUserProfile, setInitialUserProfile] = useState(initialUserProfileStatic); 
    const [profilePicture, setProfilePicture] = useState(null);
    const [isAvatarPanelOpen, setIsAvatarPanelOpen] = useState(false);
    
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState({ msg: '', isSuccess: true });

    const { setLogo } = useContext(logoContext);
    const fileInputRef = useRef(null);

    // --- SEGÉDFÜGGVÉNY A DÁTUM ELLENŐRZÉSÉHEZ ---
    const isPastDate = (idopontString) => {
        const d = new Date(idopontString);
        return d < new Date();
    };

    const fetchReservations = async (userL) => {
        try {
            const response = await fetch(`http://localhost:3500/api/users-frontend/`);
            const valasz = await response.json();

            if (response.ok) {
                const reservationsF = valasz.reservations;
                const reser = reservationsF.filter((elem) => elem.user._id === userL._id);
                setReservations(reser);
                setLogo(userL.avatar);
                setInitialUserProfile(userL);
            }
        } catch (error) {
            console.log(error.message);
            setInitialUserProfile(userL || initialUserProfileStatic); 
        }
    };

    useEffect(() => {
        const userL = JSON.parse(localStorage.getItem('user'));
        setUser(userL);
        
        if (userL && userL._id) {
            fetchReservations(userL);
        } else {
            setInitialUserProfile(initialUserProfileStatic);
        }
    }, []);

    const displayAlert = (msg, isSuccess = true) => {
        setAlertMessage({ msg, isSuccess });
        setShowAlert(true);
        setTimeout(() => setShowAlert(false), 4000);
    };

    const handleProfilePicClick = () => {
        if (!isAvatarPanelOpen) fileInputRef.current.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result);
                handleAvatarSelect(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAvatarSelect = async (avatarUrl) => {
        setProfilePicture(avatarUrl);
        setLogo(avatarUrl);
        setIsAvatarPanelOpen(false);
        try {
            await fetch(`http://localhost:3500/api/users-frontend/${user._id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ kep: avatarUrl }),
            });
        } catch (error) {
            console.log(error.message);
        }
    };

    const toggleAvatarPanel = () => setIsAvatarPanelOpen((prev) => !prev);

    const handleRandomAvatar = (avatarList) => {
        if (avatarList.length === 0) return null;
        const randomIndex = Math.floor(Math.random() * avatarList.length);
        return avatarList[randomIndex].url;
    };

    const handleRandomMaleAvatar = () => {
        const randomUrl = handleRandomAvatar(MALE_AVATARS);
        if (randomUrl) handleAvatarSelect(randomUrl);
    };

    const handleRandomFemaleAvatar = () => {
        const randomUrl = handleRandomAvatar(FEMALE_AVATARS);
        if (randomUrl) handleAvatarSelect(randomUrl);
    };

    const handleCancelReservation = async (reservationId, trainerName, idopont) => {
        const past = isPastDate(idopont);
        const confirmationMsg = past 
            ? "Biztosan törölni szeretné ezt a régebbi időpontot?" 
            : `Biztosan lemondja a foglalást?\nEdző: ${trainerName}\nIdőpont: ${idopont}`;

        if (!window.confirm(confirmationMsg)) return;

        try {
            const response = await fetch(`http://localhost:3500/api/idopont-foglal/${reservationId}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            });
            const result = await response.json();
            if (response.ok) {
                displayAlert(result.msg, true); 
                setReservations(prev => prev.filter(res => res._id !== reservationId));
            } else {
                displayAlert(`Hiba: ${result.msg}`, false);
            }
        } catch (error) {
            displayAlert('Hiba történt a szerverrel való kommunikáció során.', false);
        }
    };

    return (
        <div className="profile-page-wrapper">
            {showAlert && (
                <div className={`custom-alert ${alertMessage.isSuccess ? 'success' : 'error'}`}>
                    {alertMessage.msg}
                    <button onClick={() => setShowAlert(false)}>X</button>
                </div>
            )}

            <aside className={`avatar-panel ${isAvatarPanelOpen ? 'open' : ''}`}>
                {isAvatarPanelOpen && (
                    <div className="avatar-content">
                        <button className="panel-close-button" onClick={toggleAvatarPanel}>❌ Bezár</button>
                        <h4>Véletlen választás:</h4>
                        <div className="random-buttons">
                            <button onClick={handleRandomMaleAvatar} className="random-btn male-btn">Véletlenszerű Férfi ikon 🎲</button>
                            <button onClick={handleRandomFemaleAvatar} className="random-btn female-btn">Véletlenszerű Női ikon 🎲</button>
                        </div>
                        <h5 style={{ marginTop: '30px' }}>Kézi választás – Férfi ikonok ({MALE_AVATAR_COUNT} db)</h5>
                        <div className="avatar-grid">
                            {MALE_AVATARS.map((avatar) => (
                                <img key={avatar.id} src={avatar.url} alt={avatar.name} title={avatar.name} className="avatar-icon" onClick={() => handleAvatarSelect(avatar.url)} />
                            ))}
                        </div>
                        <h5>Kézi választás – Női ikonok ({FEMALE_AVATAR_COUNT} db)</h5>
                        <div className="avatar-grid">
                            {FEMALE_AVATARS.map((avatar) => (
                                <img key={avatar.id} src={avatar.url} alt={avatar.name} title={avatar.name} className="avatar-icon" onClick={() => handleAvatarSelect(avatar.url)} />
                            ))}
                        </div>
                    </div>
                )}
            </aside>

            <div className="profile-container">
                <button className="panel-toggle-button visible-left" onClick={toggleAvatarPanel}>🖼️ Avatárok kiválasztása</button>
                <header className="profile-header">
                    <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} style={{ display: 'none' }} />
                    <div className="profile-pic-wrapper" onClick={handleProfilePicClick}>
                        <img src={profilePicture || initialUserProfile.avatar || initialUserProfileStatic.profilePictureUrl} alt="Profilkép" className="profile-pic" />
                        <div className="upload-overlay">Kép feltöltése</div>
                    </div>
                    <h1 className="profile-name">{initialUserProfile.name}</h1>
                    <h2 className="profile-title">{initialUserProfile.title}</h2>
                    <p className="profile-location"><em>{initialUserProfile.location}</em></p>
                </header>

                {reservations.map((elem) => {
                    const past = isPastDate(elem.idopont);
                    return (
                        <div className="idopont-kontener" key={elem._id}>
                            <img src={elem.trainer.kep} alt="" />
                            <div className="idopont-info-wrapper">
                                <h1>Edző: {elem.trainer.nev}</h1>
                                <p>Időpont: {elem.idopont}</p>
                            </div>
                            <button 
                                className={past ? "delete-history-btn" : "cancel-btn"}
                                onClick={() => handleCancelReservation(elem._id, elem.trainer.nev, elem.idopont)}
                            >
                                {past ? "Régebbi időpont törlése" : "Lemond"}
                            </button>
                        </div>
                    );
                })}

                <div className="profile-content">
                    <section className="profile-section">
                        <h3 className="section-title">Edző leírása</h3>
                        <p className="profile-bio">{initialUserProfile.bio || initialUserProfileStatic.bio}</p>
                    </section>
                    <section className="profile-section">
                        <h3 className="section-title">Kapcsolat</h3>
                        <ul className="contact-list">
                            <li><strong>Email:</strong> <a href={`mailto:${initialUserProfile.email || initialUserProfileStatic.email}`}>{initialUserProfile.email || initialUserProfileStatic.email}</a></li>
                            <li><strong>Telefon:</strong> {initialUserProfile.phone || initialUserProfileStatic.phone}</li>
                        </ul>
                    </section>
                    <section className="profile-section">
                        <h3 className="section-title">Képességek</h3>
                        <ul className="skills-list">
                            {(initialUserProfile.skills || initialUserProfileStatic.skills).map((skill, index) => (
                                <li key={index} className="skill-item">{skill}</li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;