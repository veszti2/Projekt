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
        <div>
            <Navbar />
            <h1>Trainers</h1>
            {trainers.map((element) => {
                return (
                    <div
                        className="trainer"
                        key={element._id}
                    >
                        <img
                            src={element.kep}
                            alt=""
                        />
                    </div>
                );
            })}
        </div>
    );
};

export default Trainers;
