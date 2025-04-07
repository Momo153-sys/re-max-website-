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
      <img src="/images/torres-vedras.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Torres Vedras</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Torres Vedras</button>
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
        <h2 style={{textAlign:'center'}}>About Torres Vedras </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span> Temperate maritime climate. Coastal areas are windier and have milder temperature fluctuations than inland areas.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> Large municipality in the northern part of Lisbon District, extending from inland agricultural areas to the Atlantic coast.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Varied; Rolling hills inland with extensive agriculture, significant coastline with cliffs and long sandy beaches.
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
            <span> Size:</span>  Approximately 83,000 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Growing municipality, attracting residents due to quality of life, relative affordability, and amenities.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span>Predominantly Portuguese, with growing diversity due to economic activity and lifestyle appeal. Mix of urban, suburban, and rural populations.
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
            <span> Key Events:</span> Key location for the Lines of Torres Vedras defensive system (1810). Long history as an agricultural center. Development of coastal resorts in 20th century. Famous for its highly traditional and satirical Carnival.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Carnaval de Torres Vedras ('the most Portuguese Carnival in Portugal'), wine production, agricultural fairs, thermal spa tradition (Vimeiro), local gastronomy (Pastel de Feijão).
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
            <span> Statistics:</span>  Generally low to moderate crime rates. Considered a safe municipality overall. Usual precautions in crowded areas (Carnival, beaches).
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> Good perception of safety among residents.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span> Moderate. More affordable than Lisbon, Cascais, or Oeiras. Housing costs vary significantly between inland/city and prime coastal locations.
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
            Torres Vedras city is a bustling regional center. Coastal areas like Santa Cruz are lively beach resorts in summer. Inland areas are more rural and agricultural. Famous for its unique and satirical Carnival.
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span>  Mix of urban life in the city, relaxed beach life near the coast, and rural rhythms inland. Strong local identity, particularly around Carnival.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Lively social scene in Torres Vedras city and Santa Cruz (especially summer). Good range of restaurants, cafes, bars. Strong community involvement in Carnival preparations.
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
            <span> Current Trends:</span> Growing demand, especially for coastal properties (Santa Cruz area) and properties within commuting distance to Lisbon. Mix of apartments in town, houses in suburbs, and rural/coastal villas.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Solid growth, benefiting from coastal appeal and accessibility to Lisbon, estimated around 5-8% annually.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Growing municipality, attracting residents due to quality of life, relative affordability, and amenities.
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