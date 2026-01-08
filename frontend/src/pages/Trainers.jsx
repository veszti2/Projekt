import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './Trainers.css';
import { useNavigate } from 'react-router-dom';

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        const edzoLeker = async () => {
            try {
                const response = await fetch('http://localhost:3500/api/trainers-frontend');
                const adat = await response.json();
                if (response.ok) {
                    setTrainers(adat.trainers);
                }
            } catch (error) {
                console.error("Hiba az edzők betöltésekor:", error);
            }
        };
        edzoLeker();
    }, []);

    const goToTrainerPage = (trainerId) => {
        navigate(`/trainers/${trainerId}`); 
    }

    return (
        <div className="gym-page">
            <Navbar />

            <section className="gym-hero">
                <h1>Szakértő Edzőink</h1>
                <p>Profi csapat a Te sikeredért</p>
            </section>

            <section className="gym-section">
                <div className="intro-text">
                    <h2>Válaszd ki a mentorodat</h2>
                    <p>Kattints a kártyákra a részletes bemutatkozásért és az órarendért.</p>
                </div>

                <div className="trainer-grid">
                    {trainers.map((t) => (
                        <div className="trainer-card" key={t._id} onClick={() => goToTrainerPage(t._id)}>
                            <div className="trainer-img-wrap">
                                <img src={t.kep || "https://placehold.co/400x500?text=Trainer"} alt={t.nev} />
                                <div className="card-overlay">
                                    <span className="overlay-btn">Profil megtekintése</span>
                                </div>
                            </div>

                            <div className="trainer-content">
                                <h3 className="trainer-name">{t.nev}</h3>
                                <span className="trainer-badge">{t.specialization || "Személyi Edző"}</span>
                                
                                <p className="trainer-cta-text">
                                    Kattints ide az edző részletes profiljának, tapasztalatainak és szabad időpontjainak megtekintéséhez.
                                </p>
                                
                              
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Trainers;