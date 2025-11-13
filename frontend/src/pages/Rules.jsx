import './Rules.css'
import Navbar from './Navbar';

const EdzoteremSzabalyzat = () => {
  return (
    <>
    <Navbar />
    <div className="gym-page">
      {/* HERO SZEKCIÓ */}
      <section className="gym-hero">
        <div className="gym-hero-content">
          <h1>Gympower Edzőterem Szabályzat</h1>
          <p>Biztonságos, higiénikus és motiváló környezet mindenkinek – eddz felelősséggel, tisztelettel és szenvedéllyel!</p>
        </div>
      </section>

      {/* SZABÁLYZAT TARTALOM */}
      <section className="gym-section">
        <h2>1. Bevezetés</h2>
        <p>
          Üdvözlünk a <strong>PowerFit Edzőteremben</strong>! Köszönjük, hogy minket választottál az egészséges életmód és a fejlődés helyszínéül. 
          A létesítmény használatával minden vendég elfogadja a jelen házirendet, amely a biztonságos, tiszta és barátságos környezet fenntartását szolgálja. 
          Célunk, hogy minden sportolni vágyó számára inspiráló légkört biztosítsunk, ahol a mozgás öröme és a közösségi élmény kéz a kézben jár.
        </p>
      </section>

      <section className="gym-section">
        <h2>2. Nyitvatartás és belépés</h2>
        <ul>
          <li>Nyitvatartás: hétfőtől vasárnapig, 6:00 – 22:00 óráig.</li>
          <li>Az edzőterembe való belépés kizárólag érvényes bérlettel vagy napijeggyel lehetséges.</li>
          <li>Belépéskor kérjük, használd a recepción kapott belépőkártyát vagy QR-kódot. Ezek személyre szólóak, másra nem ruházhatók át.</li>
          <li>A személyazonosság ellenőrzésére a Szolgáltató jogosult, a tagság biztonságának megőrzése érdekében.</li>
          <li>A belépési jogosultság visszaélése (pl. más beléptetése) azonnali kizárással járhat.</li>
        </ul>
      </section>

      <section className="gym-section">
        <h2>3. Öltöző és értékmegőrzés</h2>
        <p>
          Az öltöző használata minden vendég számára biztosított, azonban az ott hagyott értéktárgyakért a Szolgáltató felelősséget nem vállal. 
          Javasoljuk, hogy használj zárható szekrényt a személyes holmik tárolására. 
          Amennyiben nagyobb értékű tárgyat (pl. laptopot, ékszert, pénzt) hozol magaddal, kérj értékmegőrzést a recepción, ahol biztonságos tárolást tudunk biztosítani.
        </p>
      </section>

      <section className="gym-section">
        <h2>4. Higiénia és biztonság</h2>
        <ul>
          <li>Minden edzéshez hozz magaddal törölközőt, és használd azt a gépek felületén. A higiénia mindenki közös felelőssége.</li>
          <li>Kérjük, fertőtlenítsd le a használt eszközöket edzés után a kihelyezett fertőtlenítő spray-vel vagy kendővel.</li>
          <li>Megfelelő, tiszta sportcipő és edzőruha viselése kötelező. A váltócipő használata higiéniai okokból elvárt.</li>
          <li>Tilos mezítláb edzeni, kivéve a kifejezetten erre irányuló órákon (pl. jóga, stretching).</li>
          <li>Alkoholos vagy tudatmódosító szer hatása alatt történő belépés, illetve edzés szigorúan tilos.</li>
          <li>A gépeket, súlyokat és eszközöket mindig rendeltetésszerűen használd, a saját és mások biztonsága érdekében.</li>
        </ul>
      </section>

      <section className="gym-section">
        <h2>5. Viselkedés a teremben</h2>
        <ul>
          <li>Tartsd tiszteletben más vendégek edzését, és kerüld a gépek, padok felesleges foglalását.</li>
          <li>Kerüld a hangoskodást, trágár beszédet és bármilyen agresszív viselkedést – a PowerFit közösségében a kölcsönös tisztelet az alap.</li>
          <li>Használat után minden súlyt, tárcsát és egyéb eszközt helyezz vissza a kijelölt helyére, ezzel segítve a rend és biztonság fenntartását.</li>
          <li>Telefonálás csak kulturált hangerővel engedélyezett. Kérjük, kerüld a zavaró viselkedést és a gépek „lefoglalását” hosszabb ideig.</li>
        </ul>
      </section>

      <section className="gym-section">
        <h2>6. Edzői szolgáltatások</h2>
        <p>
          Személyi edzéseket kizárólag a PowerFit által hivatalosan engedélyezett, képzett trénerek tarthatnak. 
          Ez biztosítja, hogy vendégeink szakmailag felkészült, megbízható szakemberek segítségével érhessék el céljaikat.  
          Külsős edző csak előzetes, írásos engedéllyel dolgozhat a teremben. Engedély nélküli személyi edzés vagy üzleti tevékenység a tagság felfüggesztésével járhat.  
          Amennyiben személyi edzést szeretnél igénybe venni, fordulj bizalommal recepciónkhoz, ahol segítünk a számodra legmegfelelőbb tréner kiválasztásában.
        </p>
      </section>

      <section className="gym-section">
        <h2>7. Baleset és felelősség</h2>
        <p>
          A PowerFit Edzőterem minden vendége saját felelősségére használja a létesítmény eszközeit. 
          Az edzés megkezdése előtt javasoljuk az orvosi konzultációt, különösen egészségügyi problémák, sérülések vagy korábbi betegségek esetén.  
          Sérülés, rosszullét vagy bármilyen rendellenesség esetén azonnal értesítsd a személyzetet, akik elsősegélyben tudnak részesíteni és szükség esetén orvosi segítséget hívni.  
          A Szolgáltató csak a házirend és az alapvető biztonsági szabályok betartása mellett vállal felelősséget.
        </p>
      </section>

      <section className="gym-section">
        <h2>8. Házirend megszegése</h2>
        <p>
          A házirend betartása minden vendég közös érdeke. Szabálysértés esetén a személyzet szóban figyelmeztetést adhat, 
          ismételt vagy súlyos esetben pedig a tagság ideiglenesen vagy véglegesen felfüggeszthető.  
          A kizárás esetén a megváltott bérlet vagy napijegy árának visszatérítésére nincs lehetőség.  
          Célunk nem a büntetés, hanem a kulturált, biztonságos és támogató sportkörnyezet megőrzése.
        </p>
      </section>

      <section className="gym-section">
        <h2>9. Kapcsolat</h2>
        <p>
          Ha kérdésed, javaslatod vagy észrevételed van a terem működésével kapcsolatban, fordulj hozzánk bizalommal: <br />
          📧 <a href="mailto:info@powerfit.hu">info@powerfit.hu</a> <br />
          ☎️ +36 30 123 4567 <br />
          Személyesen is szívesen segítünk a recepción nyitvatartási időben.
        </p>
      </section>

      <footer className="gym-footer">
        <p>© 2025 PowerFit Edzőterem | Minden jog fenntartva.</p>
      </footer>
    </div>
    </>
  );
};

export default EdzoteremSzabalyzat;
