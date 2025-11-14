import { useState } from 'react';
import Navbar from './Navbar';
import './Trainers.css';
import { useEffect } from 'react';

const Trainers = () => {
    const [trainers, setTrainers] = useState([]);

    useEffect(() => {
        const edzoLeker = async () => {
            const response = await fetch(
                'http://localhost:3500/api/trainers-frontend'
            );

            const adat = await response.json();
            console.log(adat.trainers);

            if (response.ok) {
                // console.log(adat.trainer);
                setTrainers(adat.trainers);
            } else {
                window.alert(adat.msg);
            }
        };

        edzoLeker();
    }, []);
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
                    <div className="trainer-card" key={t._id}>
                        <div className="trainer-img-wrap">
                            <img src={t.kep} alt={t.nev} />
                        </div>

                        <h3 className="trainer-name">{t.nev}</h3>

                        {/* <p className="trainer-about">{t.experience}</p> */}
                        <p className="trainer-about">{t.specialization}</p>
                        <p className="trainer-about">{t.elerhetoseg}</p>
                        <p className="trainer-about">{t.ar}</p>
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
