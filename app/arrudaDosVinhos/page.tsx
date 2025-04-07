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
      <img src="/images/arruda-dos-vinhos.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Arruda Dos Vinhos</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Arruda Dos Vinhos</button>
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
        <h2 style={{textAlign:'center'}}>About Arruda Dos Vinhos </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span>  Mediterranean climate, typical of the region north of Lisbon.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> Inland municipality north-east of Lisbon, south of Sobral de Monte Agraço.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Rolling hills landscape, fertile valleys suited for vineyards and agriculture.
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
            <span> Size:</span> Approximately 13,900 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Slightly growing population, benefiting somewhat from proximity to Lisbon via highways.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Predominantly Portuguese. Mix of agricultural workers, local service employees, and some commuters.
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
            <span> Key Events:</span> Long history associated with wine production. Region impacted by the Lines of Torres Vedras construction and defense.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Wine harvest festivals (Vindimas), local patron saint festivals, traditional gastronomy, local markets.
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
            <span> Statistics:</span>   Low crime rates. Considered a safe, rural municipality.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> High perception of safety and community.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span> Lower cost of living compared to Lisbon and coastal municipalities. Housing is significantly more affordable.
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
            Traditional Portuguese town and surrounding villages. Quiet and rural, with a strong connection to wine production.
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span> Relatively slow-paced, tied to agricultural rhythms and local town life. Commuting is a factor for some residents.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Centered around local cafes, restaurants, markets, and traditional festivals. Close-knit community feel in villages.
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
            <span> Current Trends:</span> Affordable market compared to Lisbon/coast. Attracts buyers looking for rural/village lifestyle within reasonable commuting distance. Mix of traditional houses and some newer developments.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Moderate growth, potentially increasing due to spillover demand from more expensive areas, estimated around 3-6% annually.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Slightly growing population, benefiting somewhat from proximity to Lisbon via highways.
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