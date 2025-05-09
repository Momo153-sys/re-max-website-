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
      <img src="/images/sintra.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Sintra</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Sintra</button>
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
        <h2 style={{textAlign:'center'}}>About Sintra </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span> Temperate maritime, but cooler, more humid, and foggier than Lisbon due to altitude and vegetation. Can be windy, especially near the coast (Guincho area shared with Cascais).
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> West of Lisbon, centered around the Serra de Sintra mountain range.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Mountainous terrain covered in lush forests, granite boulders. Extends to the Atlantic coast with cliffs and beaches. Unique microclimate.
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
            <span> Size:</span>  Approximately 386,000 (INE, 2021 - Large municipality including populous areas outside the historic town like Cacém, Algueirão-Mem Martins).
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Overall municipal growth, particularly in suburban parishes closer to Lisbon. Historic town population is more stable.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Diverse. Large Portuguese population alongside significant expat communities, particularly in the historic town and coastal areas. Wide socio-economic range across the large municipality.
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
            <span> Key Events:</span> Ancient settlement. Moorish presence (castle). Favored retreat for Portuguese royalty from 15th century onwards. Flourishing of Romantic architecture in 19th century (Pena Palace). UNESCO World Heritage status awarded in 1995.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Queijadas de Sintra & Travesseiros (local pastries), festivals (music, theatre), importance of gardens and landscape architecture, local crafts.
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
            <span> Statistics:</span> Historic town generally safe, but subject to petty theft (pickpocketing, car break-ins) due to high tourist numbers. Some larger suburban parishes may have higher crime rates typical of dense urban areas.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> Historic area perceived as safe but crowded. Awareness needed regarding belongings. Suburban areas' perceptions vary.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span> High in the historic town and desirable residential areas, especially housing. Groceries and restaurants can be inflated in tourist zones. Costs are lower in the more suburban parishes of the municipality.
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
            Magical, romantic, often described as fairytale-like. Historic center is charming but can be very crowded. Surrounding areas offer more tranquility. Coastal areas have a beach-town feel.
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span> Varies greatly. In historic Sintra, influenced by tourism but retains local community. In coastal areas, more relaxed/beach-oriented. In large suburban parishes, typical commuter town life.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Active cultural calendar in Sintra town (concerts, exhibitions). Good restaurants and cafes. Significant expat social network. Suburban parishes have local community centers and activities.
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
            <span> Current Trends:</span> Very high demand, especially for properties in or near the historic center, or with views. Significant market for luxury homes and properties with historic character. Prices are among the highest outside central Lisbon.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Strong growth historically, potentially moderating but still significant, around 5-8% annually in desirable areas.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Overall municipal growth, particularly in suburban parishes closer to Lisbon. Historic town population is more stable.
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