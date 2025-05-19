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
      <img src="/images/lourinha.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Lourinhã</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Lourinhã</button>
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
        <h2 style={{textAlign:'center'}}>About Lourinhã </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span>  Temperate maritime climate with mild, wet winters and warm, dry summers. Often influenced by Atlantic winds.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> Western coast of Portugal, Lisbon District, approximately 60 km north of Lisbon city.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Coastal plain rising to gentle hills inland. Significant coastline with cliffs and sandy beaches. Fertile agricultural land.
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
            <span> Size:</span>  Approximately 26,500 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Slightly increasing population trend.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Predominantly Portuguese, with a small but growing foreign resident community. Aging population typical of rural areas, but some influx of younger families and expats.
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
            <span> Key Events:</span> Significant paleontological discoveries (Lourinhanosaurus antunesi). Site of defensive structures (forts). Traditionally agricultural and fishing region.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Local festivals (e.g., Festas do Concelho), agricultural fairs, production of Aguardente da Lourinhã DOC, connection to fishing traditions.
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
            <span> Statistics:</span> Low crime rates compared to national average and urban centers. Generally considered a very safe area.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> Perceived as safe and tranquil by residents and visitors.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span> Lower than Lisbon and major coastal resorts like Cascais. Housing is more affordable. Groceries, dining out are generally reasonable.
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
            Relatively quiet and traditional, especially inland. Coastal areas like Praia da Areia Branca are more lively, particularly in summer. Strong connection to the land and sea.
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span> Relaxed pace, strong community ties, especially inland. More seasonal variation near the coast. Emphasis on outdoor living and local traditions.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Centered around local cafes, restaurants, community events, and beach activities in summer. Growing expat community adds diversity.
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
            <span> Current Trends:</span> Increased demand for coastal properties and rural houses ('quintas'), partly driven by remote work and lifestyle changes. Growing interest in properties suitable for tourism rentals.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Moderate but steady growth, estimated around 4-6% annually in recent years, particularly near the coast.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Slightly increasing population trend.
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