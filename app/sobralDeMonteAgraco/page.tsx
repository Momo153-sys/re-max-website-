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
      <img src="/images/sobral-de-monte-agraco.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Sobral de Monte Agraço</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Sobral de Monte Agraço</button>
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
        <h2 style={{textAlign:'center'}}>About Sobral de Monte Agraço </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span> Mediterranean climate with Atlantic influence. Can be slightly cooler and wetter than Lisbon.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> Inland municipality in the northern part of Lisbon District, near Arruda dos Vinhos and Torres Vedras.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Rolling hills landscape, characteristic of the region north of Lisbon. Significant agricultural land, especially vineyards.
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
            <span> Size:</span>  Approximately 10,600 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Slightly declining or stable population.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Predominantly Portuguese, relatively aging population. Low population density.
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
            <span> Key Events:</span> Crucial role during the Peninsular War as a central point in the Lines of Torres Vedras, the defensive lines that halted Napoleon's invasion of Portugal (1810). Long agricultural history.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Local festivals, wine production traditions, gastronomy reflecting rural produce, commemorations related to the Lines of Torres Vedras.
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
            <span> Statistics:</span>  Very low crime rates. Considered a very safe rural area.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> High perception of safety and community.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span> Significantly lower than Lisbon and coastal areas. Affordable housing. Low cost for local produce and basic services.
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
            Quiet, traditional, rural Portuguese village atmosphere. Strong connection to the land and local history (Lines of Torres).
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span>  Slow-paced, traditional rural life. Strong community feel within villages.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Centered around local cafes, markets, and traditional festivals. Limited entertainment options, relies on community interaction.
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
            <span> Current Trends:</span> Stable, relatively low-priced market. Focus on village houses and rural properties ('quintas'). Attracts buyers seeking affordability and rural lifestyle within commuting distance of Lisbon (though commute is longer).
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Slow to moderate growth, likely below national and Lisbon metro averages, perhaps 2-5% annually.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Slightly declining or stable population.
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