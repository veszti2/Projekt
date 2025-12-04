import React, { useState, useEffect } from 'react';
import './TrainerDetails.css';
// Importáljuk a 'useParams'-t az ID kiolvasásához az URL-ből
import { useParams } from 'react-router-dom';
import Navbar from './Navbar'; 
// Hozz létre egy CSS fájlt, pl. TrainerDetails.css a stílusokhoz!
// import './TrainerDetails.css'; 

const TrainerDetails = () => {
    // Kiolvassuk az 'id' paramétert az URL-ből
    const { id } = useParams();
    const [trainer, setTrainer] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTrainerDetails = async () => {
            setLoading(true);
            setError(null);
            try {
                // Backend hívás a regisztrált útvonalra: /api/trainers/:id
                // Ez az útvonal a server.js-ben a TrainersRoutesFrontend.js-re mutat
                const response = await fetch(
                    `http://localhost:3500/api/trainers/${id}`
                );

                if (!response.ok) {
                    // Ha a backend nem 200-as kódot ad vissza (pl. 404 vagy 500)
                    throw new Error('Edző adatok lekérése sikertelen! Lehet, hogy az edző nem létezik.');
                }

                const adat = await response.json();
                setTrainer(adat.trainer); 
            } catch (err) {
                console.error("Hiba az edző adatainak lekérésekor:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchTrainerDetails();
        }
    }, [id]); // Újra fut, ha az ID megváltozik

    if (loading) {
        return <div className="detail-container p-8 text-center"><p>Adatok betöltése...</p></div>;
    }

    if (error || !trainer) {
        return <div className="detail-container p-8 text-center text-red-600"><p>Hiba történt: {error || 'Edző nem található.'}</p></div>;
    }

    function edzoValaszt() {
        // window.alert(`Előjegyzés indítása ${trainer.nev} edzőhöz. Kérjük, használja az elérhetőséget a kapcsolatfelvételhez!`);
    }

    // Adatok megjelenítése
    return (
        <>
            <Navbar />
            <div className="trainer-detail-page max-w-4xl mx-auto p-4 md:p-8">
                
                {/* Fejléc */}
                <div className="trainer-header text-center mb-8 border-b pb-4">
                    <img 
                        src={trainer.kep || "https://placehold.co/150x150/EEEEEE/333333?text=Edz%C5%91"} 
                        alt={trainer.nev} 
                        className="trainer-profile-img w-36 h-36 rounded-full object-cover mx-auto mb-4 shadow-lg" 
                    />
                    <h1 className="text-4xl font-bold text-gray-800">{trainer.nev}</h1>
                </div>

                {/* Részletek */}
                <div className="trainer-info bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-2xl font-semibold mb-4 text-indigo-600">Személyi edzési szolgáltatások</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <div className="p-3 bg-gray-50 rounded">
                            <p className="font-medium text-gray-600">Speciális terület:</p>
                            <p className="text-lg font-bold">{trainer.specialization || 'Nincs megadva'}</p>
                        </div>
                        <div className="p-3 bg-gray-50 rounded">
                            <p className="font-medium text-gray-600">Ár (kb.):</p>
                            <p className="text-lg font-bold text-green-700">{`${trainer.ar} Ft` || 'Kérjen árajánlatot'}</p>
                        </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3 border-t pt-4">Bemutatkozás és módszer</h3>
                    <p className="trainer-description text-gray-700 leading-relaxed mb-6">
                        {/* Ide jönne az edzőről szóló részletes leírás */}
                        Jelenleg nincs részletes leírás a backendről. Ideális esetben itt jelenne meg az edző tapasztalata, filozófiája, és az, hogy milyen eredményeket ért el korábban az ügyfeleivel. Ez a szöveg motiválja a látogatót a kapcsolatfelvételre.
                    </p>
                    
                    <h3 className="text-xl font-semibold mt-6 mb-3 border-t pt-4">Kapcsolat</h3>
                     <div className="idopont">
                        <p className='kozepre'>E-mail: <span className="font-medium">{trainer.elerhetoseg || '—'}</span></p>
                        {/* <p>Telefonszám: <span className="font-medium">{trainer.telefonszam || '—'}</span></p> */}
                    <button 
                        className="contact-button w-full mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-lg"
                        onClick={() => edzoValaszt(trainer._id)}
                    >
                        Időpontot foglalok
                    </button>
                    </div>
                    <div id="idopont-foglal">
                        <h1>időpont</h1>
                        <input type="date" name="" id="" />
                    </div>

                </div>
            </div>
        </>
    );
};

export default TrainerDetails;