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
      <img src="/images/odivelas.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Odivelas</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Odivelas</button>
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
        <h2 style={{textAlign:'center'}}>About Odivelas </h2>
    <section className={styles.regionInfo} id='regionInfo'>
    <div className={styles.homeCard}>
        <div style ={{padding: '3%'}}>
        <div className={styles.regionInfoTitle}>
            <h2>Location & Geography</h2>
        </div>
        <div>
            <p>
            <span> Climate:</span> Mediterranean climate, identical to Lisbon.
            </p>
        </div>
        <div>
            <p>
            <span> Location:</span> Immediately north-west of Lisbon municipality.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Mostly urban and suburban landscape, relatively flat with some gentle hills.
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
            <span> Size:</span>  Approximately 148,000 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Stable to slightly growing population. Became a separate municipality from Loures in 1998.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> Younger demographic compared to Lisbon city center. Diverse population with significant immigrant communities. Large number of commuters.
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
            <span> Key Events:</span> Historically important due to the Mosteiro de Odivelas (founded 13th century). Area grew significantly in the 20th century as a suburb of Lisbon. Municipality created in 1998.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Local festivals, connection to the Monastery's history. Development of a modern, suburban culture.
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
            <span> Statistics:</span> Moderate crime rates, typical of high-density urban/suburban areas. Issues can include petty theft, car break-ins, and potentially drug-related crime in specific neighborhoods.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> Generally perceived as reasonably safe, but awareness varies by neighborhood. Busy transport hubs require usual caution.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span> Lower than Lisbon city center, especially housing. Groceries, transport, and other expenses are broadly similar to other Lisbon suburbs.
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
            Busy, modern suburban atmosphere. Primarily residential with large commercial areas. Densely populated.
</p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span>  Often revolves around commuting. Family life is prominent. Access to large retail centers shapes shopping habits.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Centered around local cafes, restaurants, shopping malls, and community events. Easy access to Lisbon's broader social and cultural scene via Metro.
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
            <span> Current Trends:</span> High demand due to excellent Metro connection to Lisbon and more affordable prices compared to the capital. Significant new apartment construction. Popular with families and commuters.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Strong growth due to high demand and limited supply relative to influx, estimated around 7-10% annually in recent years.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Stable to slightly growing population. Became a separate municipality from Loures in 1998.
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