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
      <img src="/images/loures.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Loures</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Loures</button>
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
        <h2 style={{textAlign:'center'}}>About Loures </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span>  Mediterranean climate, similar to Lisbon, potentially slightly cooler in hilly areas.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> Immediately north of Lisbon municipality.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Varied geography: urbanized areas near Lisbon, flatter agricultural land, and hills towards Bucelas.
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
            <span> Size:</span>  Approximately 203,000 (INE, 2021 - Note: Odivelas split off in 1998)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Relatively stable to slightly growing, absorbing population from Lisbon.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Diverse population, significant immigrant communities, large commuter population working in Lisbon.
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
            <span> Key Events:</span> Historically an agricultural supply area for Lisbon ('saloio' region). Development accelerated in 20th century. Bucelas wine has historical significance (mentioned by Shakespeare). Site of proclamation of the Republic (Sacavém).
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span>Wine production in Bucelas, local festivals, traditional markets, historical Quintas.
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
            <span> Statistics:</span> Crime rates are moderate, typical of densely populated suburban areas near a capital city. Some areas may experience higher rates of petty crime or specific issues.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> Generally perceived as reasonably safe, although perceptions vary between different neighborhoods ('freguesias').
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span> Generally lower than Lisbon city center, particularly housing (rent and purchase). Other costs (groceries, transport) are comparable or slightly lower.
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
            Busy and diverse. Ranges from dense urban/suburban areas to more rural settings in the north (Bucelas). Primarily a residential and commercial hub serving Lisbon.
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span> Often characterized by commuting for work or study. Family-oriented lifestyle in residential areas. Busy commercial zones.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Varied, depending on the area. Access to Lisbon's cultural offerings is easy. Local community events, cafes, restaurants, shopping centers provide social hubs.
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
            <span> Current Trends:</span> Strong demand due to proximity to Lisbon and relatively lower prices than the capital. Development of new residential areas, particularly apartments. Commercial real estate linked to retail and logistics.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Steady growth, driven by spillover demand from Lisbon. Estimated 6-8% annually in recent years.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Relatively stable to slightly growing, absorbing population from Lisbon.
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