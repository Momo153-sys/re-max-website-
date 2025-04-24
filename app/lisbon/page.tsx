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
      <img src="/images/lisbon.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Lisbon</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Lisbon</button>
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
        <h2 style={{textAlign:'center'}}>About Lisbon </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span>  Mediterranean climate with mild, rainy winters and hot, sunny summers. Benefits from river and ocean proximity.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> Capital of Portugal, situated on the estuary of the Tagus River on the Atlantic coast.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Hilly city built on seven hills, offering numerous viewpoints ('miradouros'). Borders the Tagus estuary to the south and east.
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
            <span> Size:</span>  Approximately 545,000 (city proper, INE 2021); Metropolitan Area approx. 2.8 million.
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  City proper population saw slight decline over decades, now stabilizing/slightly increasing due to immigration and urban reinvestment. Metro area continues to grow.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Increasingly diverse with significant communities from Brazil, Cape Verde, Angola, Nepal, India, Bangladesh, Italy, France, UK, etc. Large student population.
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
            <span> Key Events:</span> Ancient origins (possibly Phoenician/Roman 'Olissipo'). Moorish rule. Reconquered 1147. Age of Discoveries hub. Devastating 1755 earthquake and subsequent rebuilding (Pombaline style). Carnation Revolution 1974. Expo '98.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Fado music (UNESCO Intangible Heritage), Santos Populares (Festas de Lisboa in June), Azulejo tiles, gastronomy (Pastéis de Nata, seafood), distinct neighborhood identities (Alfama, Mouraria, Bairro Alto, etc.).
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
            <span> Statistics:</span> Relatively safe for a major capital city. Main issue is opportunistic petty crime (pickpocketing, scams) in tourist-heavy areas. Violent crime rates are lower than many other large European cities.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> Generally perceived as safe, especially during the day. Caution advised in crowded areas and late at night in certain zones.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span>  Highest in Portugal, particularly housing (rentals are very expensive). Dining out, transport, and groceries are moderately priced compared to other Western European capitals but expensive for Portuguese average wage.
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
            Vibrant, cosmopolitan, historic yet modern. Bustling activity, diverse cultural influences, lively street life, distinct neighborhood characters.
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span>  Fast-paced in central areas, more relaxed in residential neighborhoods. Mix of work, study, leisure. Strong cafe culture. Outdoor living encouraged by climate.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Extremely vibrant and diverse. Countless restaurants, bars, cafes, clubs, cultural events, festivals, markets catering to all tastes and budgets.
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
            <span> Current Trends:</span> Historically high prices, especially in central/historic districts. Strong international buyer interest (Golden Visa, NHR). Growth rates have moderated slightly after years of rapid increase. High rental demand. Gentrification pressures.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Slowing but still positive growth, potentially 3-6% annually, but highly variable by neighborhood.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> City proper population saw slight decline over decades, now stabilizing/slightly increasing due to immigration and urban reinvestment. Metro area continues to grow.
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