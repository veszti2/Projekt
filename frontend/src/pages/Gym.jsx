import './Gym.css'
import Navbar from './Navbar'

const Gym = () => {
  return (
    <div className="gym-page">
      <Navbar />

      {/* Hero szekció */}
      <header className="gym-hero">
        <div className="gym-hero-content">
          <h1>A Quarter Fitness edzőterem</h1>
          <p>
            Modern felszereltség, prémium gépek és motiváló környezet – minden adott ahhoz, hogy kihozd magadból a maximumot.
          </p>
        </div>
      </header>

      {/* Áttekintés */}
      <section className="gym-section intro">
        <h2>850 m<sup>2</sup> tiszta energia</h2>
        <p>
          A Quarter Fitness egy 850 négyzetméteres, tágas és világos edzőterem Budapesten, 
          ahol a legmodernebb Technogym, Life Fitness és Hammer Strength gépek várják a vendégeket.
          Teremünk minden zónája úgy lett kialakítva, hogy a kezdők és a haladók is hatékonyan, kényelmesen és biztonságosan edzhessenek.
        </p>
      </section>

      {/* Gépek és zónák */}
      <section className="gym-section zones">
        <h2>Főbb edzészónáink</h2>

        <div className="zone-cards">

          <div className="zone-card">
            <img
              src="https://images.unsplash.com/photo-1583454110551-21f2fa2e3df4?auto=format&fit=crop&w=1600&q=80"
              alt="Súlyzós edzés zóna"
            />
            <h3>Súlyzós edzés zóna</h3>
            <p>
              Több mint 30 különböző súlyzós gép és 4 sor szabad súly (1,25–50 kg között). 
              Találsz Smith-keretet, fekvenyomó padokat, lábgép-sort, és professzionális 
              Hammer Strength edzőállomásokat.
            </p>
          </div>

          <div className="zone-card">
            <img
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=1600&q=80"
              alt="Kardió rész"
            />
            <h3>Kardió részleg</h3>
            <p>
              20+ Technogym és Life Fitness futópad, ellipszis tréner, lépcsőző és szobakerékpár. 
              Minden gép digitális kijelzővel és pulzusmérővel felszerelt, így pontosan követheted az eredményeidet.
            </p>
          </div>

          <div className="zone-card">
            <img
              src="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=1600&q=80"
              alt="Funkcionális edzőtér"
            />
            <h3>Funkcionális edzőtér</h3>
            <p>
              Saját testsúlyos és cross training részleg TRX kötéllel, kettlebellel, medicinlabdákkal, 
              battle rope-pal, gumikötéllel és egy nagyméretű funkcionális ketreccel.
            </p>
          </div>

          <div className="zone-card">
            <img
              src="https://images.unsplash.com/photo-1594737625785-cbe9d1a1c546?auto=format&fit=crop&w=1600&q=80"
              alt="Csoportos edzések"
            />
            <h3>Csoportos edzések terme</h3>
            <p>
              Tágas, tükrös terem fa padlóval és hangrendszerrel, ahol spinning, HIIT, mobility és 
              stretching órákat tartunk naponta többször.
            </p>
          </div>

          <div className="zone-card">
            <img
              src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?auto=format&fit=crop&w=1600&q=80"
              alt="Wellness részleg"
            />
            <h3>Wellness részleg</h3>
            <p>
              Edzés után lazíthatsz az infra- és finn szaunában, valamint a pihenőzónában. 
              A teljes terület klimatizált és modern öltözőkkel felszerelt.
            </p>
          </div>

        </div>
      </section>

      {/* Összegzés */}
      <section className="gym-section summary">
        <h2>Felszereltség röviden</h2>
        <ul>
          <li>✅ 30+ professzionális súlyzós gép</li>
          <li>✅ 20+ kardió gép – futópad, ellipszis tréner, kerékpár</li>
          <li>✅ Funkcionális rész TRX, kettlebell, battle rope</li>
          <li>✅ Csoportos edzőterem és szauna</li>
          <li>✅ Modern öltözők, zuhanyzók és pihenőrész</li>
        </ul>
      </section>

    
    </div>
  )
}

export default Gym
