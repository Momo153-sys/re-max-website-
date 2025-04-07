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
      <img src="/images/cadaval.jpg" className="img-fluid rounded-start" alt="..." width={'fit-content'} />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Cadaval</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Cadaval</button>
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
        <h2 style={{textAlign:'center'}}>About Cadaval </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span>   Mediterranean climate with Atlantic influence. Cooler and potentially wetter, especially at higher altitudes on Serra de Montejunto, compared to Lisbon.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> Inland municipality in the northern part of Lisbon District, within the Oeste region.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span>  Dominated by the Serra de Montejunto mountain range. Rolling hills and fertile plains dedicated to agriculture.
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
            <span> Size:</span>  Approximately 13,400 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Slightly declining or stable population, typical of many inland rural areas.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Predominantly Portuguese, aging population. Lower density compared to coastal or suburban areas.
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
            <span> Key Events:</span> Long agricultural history. Serra de Montejunto played roles in various historical periods (e.g., Lines of Torres Vedras). Development linked to fruit and wine production.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Harvest festivals (pears, grapes), local patron saint festivities, traditional gastronomy based on agricultural products, agricultural fairs.
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
            <span> Statistics:</span>   Very low crime rates. Considered a very safe and peaceful area.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> High perception of safety among residents.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span>  Significantly lower than Lisbon and coastal areas. Housing is very affordable. Local produce can be inexpensive.
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
            Rural, peaceful, and traditional. Life revolves around agriculture and small-town dynamics. Strong connection to nature.
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span> Slow-paced, rural lifestyle deeply connected to agricultural cycles. Strong sense of local community.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Centered around local cafes, markets, and community events (festivals, fairs). Limited nightlife or extensive entertainment options.
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
            <span> Current Trends:</span> Stable market, focus on rural properties (quintas) and village houses. More affordable than coastal or Lisbon-adjacent areas. Some interest from those seeking rural lifestyle or agricultural investments.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Slow to moderate growth, likely below national average, estimated around 2-4% annually.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Slightly declining or stable population, typical of many inland rural areas.
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