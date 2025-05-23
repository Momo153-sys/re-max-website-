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
      <img src="/images/mafra.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Mafra</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Mafra</button>
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
        <h2 style={{textAlign:'center'}}>About Mafra </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span>  Temperate maritime. Ericeira is often windy and cooler than Mafra town due to coastal influence. Mafra town slightly more sheltered.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> West of Lisbon District, stretching from inland areas to the Atlantic coast.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Varied Inland rolling hills around Mafra town. Significant forest area (Tapada). Rugged coastline with cliffs and beaches around Ericeira.
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
            <span> Size:</span>  Approximately 87,000 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Significant population growth, one of the fastest-growing municipalities in the Lisbon area, driven by lifestyle appeal and relative proximity to Lisbon.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Increasingly diverse, significant influx of younger families and expats (particularly surfers, digital nomads in Ericeira). Mix with traditional Portuguese population.
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
            <span> Key Events:</span> Construction of the Mafra Palace complex (18th century) under King João V. Tapada used by royalty. Ericeira's history as a fishing port. Recognition as World Surfing Reserve (2011).
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Religious processions (Círio da Prata Grande), traditional pottery/ceramics (Sobreiro), surfing culture (Ericeira), gastronomy (seafood, regional bread/sweets).
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
            <span> Statistics:</span> Generally low crime rates. Considered a safe municipality.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> High perception of safety. Usual precautions advised, especially regarding belongings in tourist areas or cars parked near beaches.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span> Moderate. Housing is the main driver of higher costs, especially in Ericeira. Groceries and dining out are reasonably priced outside peak tourist spots in Ericeira.
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
            Mafra town is dominated by the imposing palace, relatively calm, traditional Portuguese town feel. Ericeira: Lively, international surf town vibe, busy especially in summer, charming old center.
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span> Mafra town offers a more traditional, family-oriented Portuguese lifestyle. Ericeira is characterized by a more international, active, surf-centric lifestyle. Both benefit from proximity to nature and coast.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Ericeira has a vibrant scene with surf schools, cafes, bars, restaurants popular with locals and expats. Mafra has a quieter scene focused on local cafes, restaurants, and community events.
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
            <span> Current Trends:</span> Strong demand, especially in Ericeira and coastal areas, driven by surf tourism, lifestyle appeal, and proximity to Lisbon. Growth in rural properties for tourism or lifestyle buyers. Mafra town sees stable demand.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Significant growth, particularly in Ericeira (estimated 7-10%+ annually in recent peak years). Mafra town shows more moderate growth (4-6%).
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Significant population growth, one of the fastest-growing municipalities in the Lisbon area, driven by lifestyle appeal and relative proximity to Lisbon.
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