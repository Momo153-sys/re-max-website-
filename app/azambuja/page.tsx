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
      <img src="/images/azambuja.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Azambuja</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Azambuja</button>
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
        <h2 style={{textAlign:'center'}}>About Azambuja </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span>  Mediterranean climate with continental influences. Hotter summers and potentially colder winters than coastal Lisbon areas.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> Easternmost municipality of Lisbon District, bordering the Santarém District, situated along the Tagus River.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span>Dominated by the flat, fertile plains ('lezírias') of the Tagus River valley. Subject to flooding in certain low-lying areas.
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
            <span> Size:</span>  Approximately 21,500 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Relatively stable population.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Predominantly Portuguese, strong local identity tied to Ribatejo culture.
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
            <span> Key Events:</span> Long history tied to the Tagus River and agriculture. Development linked to railway line. Strong traditions of the Ribatejo region.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Feira de Maio (major annual fair celebrating local culture, agriculture, bullfighting), bull runs ('largadas'), horse breeding and equestrian events ('picarias'), Campino figure (traditional Ribatejo horseman), local gastronomy.
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
            <span> Statistics:</span>   Low crime rates. Considered a safe municipality.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> Good perception of safety, strong community watchfulness typical of traditional areas.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span>  Lower cost of living compared to Lisbon metropolitan area average. Affordable housing and local services.
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
            Strongly traditional Ribatejo atmosphere. Life connected to the river, agriculture, horses, and bullfighting traditions. Relatively slow-paced outside festival times 
            </p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span> Strongly influenced by Ribatejo culture and traditions. Relatively tranquil lifestyle outside of major festival periods. Importance of family and community ties.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Centered around local cafes, traditional restaurants ('tascas'), and major cultural events like the Feira de Maio. Strong associations linked to horses and bullfighting.
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
            <span> Current Trends:</span> Affordable market focused on village/town houses and rural properties ('quintas'). Interest driven by affordability and traditional lifestyle. Logistics development boosts commercial property.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Slow to moderate growth, perhaps 2-5% annually. Stable market.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Relatively stable population.
            </p>
        </div>
        </div>
</div>

    </section>
    <hr />
        <h2 style={{textAlign:'center'}}>Home Listings </h2>
    <section className={styles.regionListings} id='regionListings'>
    <div className={styles.homesGrid}>
            <div className={styles.homeCard}>

<div className="card">
  <img src="/images/remax-flat1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <p className="card-text" style={{color: 'red', textDecoration: 'uppercase'}}> Remax direct hoorn</p>
    <p className="card-text" style={{color: 'rgb(0, 61, 165)',fontWeight: '700',textAlign:'center'}}>
      Kings Street 149
    </p>
    <p className="card-text">
      Knight's Church <br />
      &euro; 499,000.00
    </p>
    <div style={{display: 'flex', justifyContent: 'space-around',margin:'1%', paddingTop:'1%', borderTop:'1px solid rgba(39, 73, 74, 0.2)',}}>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/surface.png" style={{width: '100%'}} alt=""  />
        </div>
      <div>
        <span>167</span> m&sup2;
      </div>
      </div>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/bed.png" style={{width: '20px'}} alt=""  />
        </div>
      <div>
        3
      </div>
      </div>
    
    </div>
    
    
  </div>
</div>
</div>

<div className={styles.homeCard}>

<div className="card">
  <img src="/images/remax-flat1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <p className="card-text" style={{color: 'red', textDecoration: 'uppercase'}}> Remax direct hoorn</p>
    <p className="card-text" style={{color: 'rgb(0, 61, 165)',fontWeight: '700',textAlign:'center'}}>
      Kings Street 149
    </p>
    <p className="card-text">
      Knight's Church <br />
      &euro; 499,000.00
    </p>
    <div style={{display: 'flex', justifyContent: 'space-around',margin:'1%', paddingTop:'1%', borderTop:'1px solid rgba(39, 73, 74, 0.2)',}}>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/surface.png" style={{width: '100%'}} alt=""  />
        </div>
      <div>
        <span>167</span> m&sup2;
      </div>
      </div>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/bed.png" style={{width: '20px'}} alt=""  />
        </div>
      <div>
        3
      </div>
      </div>
    
    </div>
    
    
  </div>
</div>
</div>

<div className={styles.homeCard}>

<div className="card">
  <img src="/images/remax-flat1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
  <p className="card-text" style={{color: 'red', textDecoration: 'uppercase'}}> Remax direct hoorn</p>
    <p className="card-text" style={{color: 'rgb(0, 61, 165)',fontWeight: '700',textAlign:'center'}}>
      Kings Street 149
    </p>
    <p className="card-text">
      Knight's Church <br />
      &euro; 499,000.00
    </p>
    <div style={{display: 'flex', justifyContent: 'space-around',margin:'1%', paddingTop:'1%', borderTop:'1px solid rgba(39, 73, 74, 0.2)',}}>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/surface.png" style={{width: '100%'}} alt=""  />
        </div>
      <div>
        <span>167</span> m&sup2;
      </div>
      </div>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/bed.png" style={{width: '20px'}} alt=""  />
        </div>
      <div>
        3
      </div>
      </div>
    
    </div>
    
    
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