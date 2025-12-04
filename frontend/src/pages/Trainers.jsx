import { useState } from 'react';
import Navbar from './Navbar';
import './Trainers.css';
import { useEffect } from 'react';
// 1. ÚJ IMPORT: A useNavigate a navigációhoz
import { useNavigate } from 'react-router-dom';

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);
    // 2. NAVIGÁCIÓ INICIALIZÁLÁSA
    const navigate = useNavigate(); 

    useEffect(() => {
        const edzoLeker = async () => {
            // ... adat lekérés
            const response = await fetch(
                'http://localhost:3500/api/trainers-frontend'
            );

            const adat = await response.json();
            console.log(adat.trainers);

            if (response.ok) {
                setTrainers(adat.trainers);
            } else {
                // Fontos: lecseréltem window.alert-et console.error-ra a React gyakorlat szerint
                console.error("Hiba az edzők lekérésekor:", adat.msg);
            }
        };

        edzoLeker();
    }, []);

    // 3. ÚJ FÜGGVÉNY: Átirányít a részletes oldalra az ID alapján
    const goToTrainerPage = (trainerId) => {
        // Navigálás a /trainers/:id útvonalra
        navigate(`/trainers/${trainerId}`); 
    }

    return (
    <div className="gym-page">
        <Navbar />

        {/* --- HERO --- */}
        <section className="gym-hero">
            <h1>Trainers</h1>
            <p>Találd meg a számodra legideálisabb edzőt</p>
        </section>

        {/* --- BEVEZETŐ SZÖVEG --- */}
        <section className="gym-section">
            <h2>Miért dolgozz személyi edzővel?</h2>
            <p>
                Egy jó edző többet jelent, mint valaki, aki megmutatja a gépeket.
                Segít megérteni a tested működését, motivál, felelősséget ad és 
                személyre szabott tervet készít, hogy hatékonyabban és biztonságosabban
                haladj a céljaid felé.
            </p>

            <ul>
                <li>Személyre szabott edzésterv</li>
                <li>Motiváció és folyamatos fejlődés</li>
                <li>Helyes technika elsajátítása</li>
                <li>Táplálkozási iránymutatás</li>
                <li>Teljesítmény- és testösszetétel-követés</li>
            </ul>
        </section>

        {/* --- EDZŐK GRID --- */}
        <section className="gym-section">
            <h2>A Csapatunk</h2>

            <p>
                Edzőink több éves tapasztalattal, változatos szakterületekkel és
                kiemelkedő elhivatottsággal állnak rendelkezésedre. Akár súlyzós edzés,
                erőnlétfejlesztés, fogyás vagy rehabilitáció a célod — nálunk megtalálod
                azt a szakembert, aki végigvezet az úton.
            </p>

            <div className="trainer-grid">
                {trainers.map((t) => (
                    // 4. KATTINTHATÓ KÁRTYA: Hozzáadva az onClick eseménykezelő
                    <div 
                        className="trainer-card cursor-pointer hover:shadow-xl transition duration-300" 
                        key={t._id} 
                        onClick={() => goToTrainerPage(t._id)}
                    >
                        <div className="trainer-img-wrap">
                            <img src={t.kep || "https://placehold.co/100x100?text=Kép"} alt={t.nev} />
                        </div>

                        <h3 className="trainer-name">{t.nev}</h3>

                        <p className="trainer-about">{t.specialization}</p>
                        <p className="trainer-about">{t.elerhetoseg}</p>
                        <p className="trainer-about font-bold text-green-600">{t.ar}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* --- ZÁRÓ SZEKCIÓ --- */}
        <section className="gym-section">
            <h2>Készen állsz elkezdeni?</h2>
            <p>
                Vedd fel velünk a kapcsolatot, és segítünk megtalálni a számodra 
                legmegfelelőbb edzőt! Életmódváltás, fogyás, izomépítés, erőnlét 
                fejlesztése — nálunk minden célhoz megvan a szakértő.
            </p>
        </section>
    </div>
);
};

export default Trainers;