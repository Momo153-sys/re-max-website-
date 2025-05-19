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
      <img src="/images/cascais.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Cascais</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Cascais</button>
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
        <h2 style={{textAlign:'center'}}>About Cascais </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span>  Mediterranean climate with strong Atlantic influence. Pleasant temperatures year-round, though can be windy, especially near Guincho. Less rainfall than Sintra.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> Coastal municipality west of Lisbon, along the 'Portuguese Riviera'.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span>  Coastline varies from sheltered sandy beaches near Cascais town to the rugged, windy coast towards Guincho. Inland areas include parts of the Sintra-Cascais Natural Park.
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
            <span> Size:</span>  Approximately 214,000 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Steady population growth, attracting both Portuguese and a large, affluent international community.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Significant foreign resident population (expats, retirees) from various countries (UK, Brazil, Northern Europe, etc.). High income levels compared to national average.
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
            <span> Key Events:</span> Origins as a fishing village. Became a fashionable royal resort in the late 19th century. Haven for exiled European royalty during WWII (especially Estoril). Development as a major international tourist destination.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Connection to the sea (sailing, fishing heritage), cultural events (Festas do Mar, EDP Cool Jazz), Paula Rego's connection, high society events, Formula 1 history (Estoril circuit nearby).
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
            <span> Statistics:</span> Relatively low crime rates, especially considering its status as a major tourist destination and affluent area. Mostly petty crime.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> Generally perceived as very safe.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span>  High for Portugal. Housing is extremely expensive. Dining out, services, and international groceries are also priced at a premium. Comparable to many Western European cities.
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
            Chic, cosmopolitan, relaxed yet sophisticated. Mix of historic resort town charm and modern luxury. Lively, international feel.
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span> High quality of life, outdoor-oriented lifestyle. Mix of relaxed beach town feel with sophisticated urban amenities. Strong international community.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Vibrant and diverse. Numerous cafes, restaurants, bars. Active expat community with clubs and events. Cultural events calendar. Beach and sports activities are central.
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
            <span> Current Trends:</span>One of the most expensive markets in Portugal. High demand for luxury apartments, villas, and properties with sea views. Strong international buyer presence. Rental market is also very tight and expensive.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Historically strong growth, may be moderating slightly but remains very high, likely 5-10%+ annually in prime segments.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Steady population growth, attracting both Portuguese and a large, affluent international community.
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