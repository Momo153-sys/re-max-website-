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
      <img src="/images/alenquer.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Alenquer</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Alenquer</button>
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
        <h2 style={{textAlign:'center'}}>About Alenquer </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span> Mediterranean climate with Atlantic influences, well-suited for viticulture.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> North of Lisbon District, between the Tagus River valley (though not directly bordering) and the Serra de Montejunto range.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Hilly terrain, particularly around Alenquer town which cascades down a slope. Rolling hills covered in vineyards.
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
            <span> Size:</span> Approximately 44,800 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span> Relatively stable population, potential for slight growth due to location.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Predominantly Portuguese. Population linked to agricultural and industrial activities in the region.
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
            <span> Key Events:</span> Ancient origins. Important medieval town. Birthplace of humanist Damião de Góis. Center of wine production for centuries. Strategic points during Peninsular War (Lines of Torres overlap).
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Strong wine culture (vindimas - harvest). Festas do Espírito Santo. Traditional gastronomy. Nickname 'Presépio de Portugal'.
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
            <span> Statistics:</span>  Low crime rates. Considered a safe municipality.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> High perception of safety, typical of traditional towns and rural areas.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span> Lower cost of living than Lisbon metropolitan average. Affordable housing, local produce, and services.
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
            Charming and historic town center ('Presépio' hillside view). Surrounded by a landscape dominated by vineyards. Traditional, relatively quiet atmosphere outside harvest times.
            </p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span> Lifestyle tied to the rhythms of the wine industry and traditional town life. Mix of agricultural workers, industrial employees, and local service providers.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Centered around local cafes, restaurants, wine-related events, and traditional festivals. Growing scene around wine tourism.
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
            <span> Current Trends:</span> Stable and affordable market. Attracts buyers seeking traditional town/village life or rural properties (quintas), often linked to wine production. Good value compared to areas closer to Lisbon.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Moderate growth, likely 3-5% annually, influenced by affordability and wine sector health.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Relatively stable population, potential for slight growth due to location.
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