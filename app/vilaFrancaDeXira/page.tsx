import React from 'react'
import HeaderComponent from '../component/headerComponent';
import styles from "../mainPage.module.css";
import FooterComponent from '../component/footerComponent';
import HouseListComponent from '../component/houseListComponent';
const page = () => {
  return (
    <>
    <HeaderComponent />
    <section className={styles.offersSection}>
    <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-7">
      <img src="/images/vila-franca-de-xira.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Vila Franca de Xira</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Vila Franca de Xira</button>
    </a>
    </div>

    <div>
    <a href="#regionListings">
        <button className={styles.redirectButton}> Home Listings</button>
    </a>
    </div>
    </div>
    </div>
    </div>
  </div>
</div>
    </section>
        <hr />
        <h2 style={{textAlign:'center'}}>About Vila Franca de Xira </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span> Mediterranean climate, influenced by the large body of water (Tagus estuary). Can be humid.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> Northeast of Lisbon, along the west bank of the Tagus River estuary.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Dominated by the Tagus River and its flat Lezíria plains. Some hills rise away from the river.
            </p>
        </div>
        </div>
</div>

<div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Population & Demographics</h2>
        </div>
        <div>
            <p>
            <span> Size:</span>  Approximately 138,000 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>   Stable to slightly growing population.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Predominantly Portuguese with strong local/regional identity. Significant population working in logistics, industry, and commuting to Lisbon.
            </p>
        </div>
        </div>
</div>

<div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>History & Culture</h2>
        </div>
        <div>
            <p>
            <span> Key Events:</span>  Long history tied to Tagus River. Development accelerated by railway. Important center for bullfighting culture. Birthplace of significant Neo-Realist writers/artists. Industrial development in 20th century.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Colete Encarnado (Red Waistcoat) festival and Feira de Outubro (October Fair) - major events with bull runs, processions, equestrian activities. Strong bullfighting tradition. Campino figure. Neo-Realism movement has strong local ties.
            </p>
        </div>
        </div>
</div>

<div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Safety & Living</h2>
        </div>
        <div>
            <p>
            <span> Statistics:</span> Moderate crime rates, typical for a sizeable town with industrial and commuter elements. Some neighborhoods may experience specific issues.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> Generally perceived as reasonably safe, particularly in central areas. Awareness needed during large festivals due to crowds.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span> Moderate cost of living. Housing is more affordable than Lisbon and immediate western suburbs. Other costs generally reasonable.
            </p>
        </div>
        </div>
</div>
<div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Atmosphere & Community</h2>
        </div>
        <div>
            <p>
            Strong Ribatejo character, especially evident during festivals. Mix of industrial town heritage, agricultural connection (Lezíria), and commuter town aspects. Passionate about local traditions.
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span>  Mix of industrial/logistics work schedules, commuting patterns, and strong adherence to local traditions. Pride in Ribatejo identity.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Very lively during festival periods (Colete Encarnado, Feira de Outubro). Otherwise centered around local cafes, restaurants, cultural events (museum, library), and associations linked to traditions (bullfighting clubs, etc.).
            </p>
        </div>
        </div>
</div>

<div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Real Estate Market Insights</h2>
        </div>
        <div>
            <p>
            <span> Current Trends:</span>  Relatively affordable market with good transport links to Lisbon (train). Mix of apartments in town and houses/quintas in surrounding areas. Demand influenced by commuters and logistics sector employees.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Moderate growth, benefiting from transport links and affordability compared to Lisbon, perhaps 4-7% annually.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Stable to slightly growing population.
            </p>
        </div>
        </div>
</div>

    </section>
    <hr />
        <h2 style={{textAlign:'center'}}>Home Listings </h2>
    <section className={styles.regionListings} id='regionListings'>
    <HouseListComponent />
    </section>
    <FooterComponent />
    </>
  )
}

export default page