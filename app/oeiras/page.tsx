import React from 'react'
import HeaderComponent from '../component/headerComponent';
import styles from "../mainPage.module.css";
import FooterComponent from '../component/footerComponent';
const page = () => {
  return (
    <>
    <HeaderComponent />
    <section className={styles.offersSection}>
    <div className="card mb-3">
  <div className="row g-0">
    <div className="col-md-7">
      <img src="/images/oeiras.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Oeiras</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Oeiras</button>
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
        <h2 style={{textAlign:'center'}}>About Oeiras </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span> Mediterranean climate, similar to Lisbon and Cascais, benefiting from coastal proximity.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> Coastal municipality situated between Lisbon and Cascais.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Coastal area with beaches and a long promenade, rising inland to areas with business parks and residential neighborhoods.
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
            <span> Size:</span>  Approximately 171,000 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Stable to slightly growing population. Attracts residents due to economic opportunities and quality of life.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Highly educated population. Significant number of professionals working in tech and related fields. Growing international community attracted by jobs.
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
            <span> Key Events:</span> Strongly associated with Marquês de Pombal (18th-century statesman) who had his palace here. Historically area of farms and defensive forts. Major development in late 20th century as residential suburb and then economic hub.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Connection to Marquês de Pombal, maritime traditions (historical forts), modern focus on culture (Parque dos Poetas, cultural centers).
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
            <span> Statistics:</span> Low crime rates compared to national average. Considered one of the safest municipalities in the Lisbon metropolitan area.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> Very high perception of safety.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span> High for Portugal, particularly housing. Other costs (dining, services) reflect the affluent nature of the municipality. Comparable to Lisbon central areas.
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
            Modern, dynamic, and affluent. Mix of residential tranquility, busy business parks, and lively coastal areas. High standard of living is evident.
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span>  Characterized by high quality of life, balance between work (for many in local tech/business sectors) and leisure (coast, parks). Family-friendly. International environment.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Good restaurants, cafes, especially along the coast and near Oeiras Parque. Cultural events at Fábrica da Pólvora and other venues. Active lifestyle is common.
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
            <span> Current Trends:</span> Very high demand for both residential and commercial real estate. Prices are high, driven by the strong economy and high average income. Popular with expats and highly qualified professionals. Limited supply.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Strong and consistent growth, often outperforming national average, estimated around 6-10% annually.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Stable to slightly growing population. Attracts residents due to economic opportunities and quality of life.
            </p>
        </div>
        </div>
</div>

    </section>
    <hr />
        <h2 style={{textAlign:'center'}}>Home Listings </h2>
    <section className={styles.regionListings} id='regionListings'>
        <div className={styles.offersContainer}>
        <div className={styles.homeCard}>

<div className="card">
  <img src="/images/remax-flat1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

<div className={styles.homeCard}>

<div className="card">
  <img src="/images/remax-flat1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

<div className={styles.homeCard}>

<div className="card">
  <img src="/images/remax-flat1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

<div className={styles.homeCard}>

<div className="card">
  <img src="/images/remax-flat1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
        </div>
    </section>
    <FooterComponent />
    </>
  )
}

export default page