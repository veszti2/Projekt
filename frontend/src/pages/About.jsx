import React, { useState, useEffect, cloneElement } from 'react'
import Navbar from './Navbar'
import './About.css'

const About = () => {
  const [trainers, setTrainers] = useState([]);
    
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

      useEffect(() => {
          const edzoLeker = async () => {
              const response = await fetch(
                  'http://localhost:3500/api/trainers-frontend'
              );
  
              const adat = await response.json();
              console.log(adat.trainers);
  
              if (response.ok) {
                  // console.log(adat.trainer);
                    shuffle(adat.trainers);
                    let atadott = [];
                    atadott.push(adat.trainers[0]);                   
                    atadott.push(adat.trainers[1]);                   
                    atadott.push(adat.trainers[3]);                   
                  setTrainers(atadott);
              } else {
                  window.alert(adat.msg);
              }
          };
  
          edzoLeker();
      }, []);

  return (
    <div className="about-page">
      <Navbar />

      {/* Hero szekció */}
      <header className="about-hero">
        <div className="about-hero-content">
          <h1>Rólunk</h1>
          <p>
            A Quarter Fitness több mint egy edzőterem – ez a hely, ahol célokat érünk el, és közösséget építünk.
          </p>
        </div>
      </header>

      {/* Bemutatkozás */}
      <section className="about-section">
        <h2>Kik vagyunk?</h2>
        <p>
          A Quarter Fitness 2022-ben nyitotta meg kapuit Budapesten, 850 m<sup>2</sup>-es területen.
          Célunk, hogy modern, inspiráló és barátságos környezetet biztosítsunk mindenkinek, aki fejlődni szeretne – 
          akár most kezdi, akár profi sportoló.
        </p>
      </section>

      {/* Felszereltség */}
      <section className="about-section light">
        <h2>Modern felszereltség</h2>
        <p>
          Teremünkben megtalálhatóak a legújabb Technogym és Hammer Strength gépek, 
          funkcionális edzőrész, súlyzós zóna, crossfit állomás, valamint külön rész a nyújtásra és mobilitásfejlesztésre.
        </p>
        <img
          src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1600&q=80"
          alt="Quarter Fitness edzőterem"
          className="about-img"
        />
      </section>

      {/* Személyi edzés és csapat */}
      <section className="about-section">
        <h2>Személyi edzőink</h2>
        <p>
          Szakértő személyi edzőink minden vendéghez egyéni figyelemmel fordulnak. 
          Hiszünk abban, hogy a siker kulcsa a tudatos edzés, a motiváció és a következetesség.
        </p>

        <div className="trainer-cards">
        {
            trainers.map(elem => {
                return (
                    <div className="trainer-card" key={elem._id}>
            <img
              src={elem.kep}
              alt="Edző"
            />
            <h3>{elem.nev}</h3>
            <p>{elem.experience}</p>
          </div>
                )
            })
        }
          {/* <div className="trainer-card">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80"
              alt="Edző"
            />
            <h3>Kiss Dániel</h3>
            <p>Erőnléti és testépítő edző, 10 év tapasztalattal</p>
          </div>
          <div className="trainer-card">
            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80"
              alt="Edző"
            />
            <h3>Tóth Laura</h3>
            <p>Személyi edző és táplálkozási tanácsadó</p>
          </div>
          <div className="trainer-card">
            <img
              src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?auto=format&fit=crop&w=800&q=80"
              alt="Edző"
            />
            <h3>Szabó Márk</h3>
            <p> </p>
          </div>*/}
        </div> 
      </section>

      {/* Küldetés */}
      <section className="about-section light">
        <h2>Küldetésünk</h2>
        <p>
          Célunk, hogy minden vendégünk megtalálja a számára megfelelő utat az egészséges életmódhoz. 
          A Quarter Fitness-ben nem csak edzünk — közösen fejlődünk, inspiráljuk egymást, és élvezzük az utat a jobb önmagunk felé.
        </p>
      </section>

      {/* Lábjegyzet */}
      <footer className="about-footer">
        <p>© 2025 Quarter Fitness | Minden jog fenntartva</p>
      </footer>
    </div>
  )
}

export default About
