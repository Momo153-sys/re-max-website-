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
      <img src="/images/amadora.webp" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
    <div className="card-body" style ={{marginTop: '25%'}}>
    <h5 className="card-title" style ={{marginBottom: '20%', fontWeight: '800', fontSize: '60px'}}>Amadora</h5>
    <div className={styles.buttonContainer}>
    <div>
    <a href="#regionInfo">
        <button className={styles.redirectButton}> About Amadora</button>
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
        <h2 style={{textAlign:'center'}}>About Amadora </h2>
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
            <span> Location:</span> Immediately west/northwest of Lisbon municipality.
            </p>
        </div>
        <div>
            <p>
            <span> Geography:</span> Densely built-up urban area, relatively flat.
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
            <span> Size:</span> Approximately 172,000 (INE, 2021)
            </p>
        </div>
        <div>
            <p>
            <span> Growth:</span>  Relatively stable population size after period of rapid growth in late 20th century. High population density.
            </p>
        </div>
        <div>
            <p>
            <span> Breakdown:</span> One of the most diverse municipalities in Portugal, with large communities from African Portuguese-speaking countries (Cape Verde, Angola), Brazil, and other origins. Relatively young population.
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
            <span> Key Events:</span> Rapid urbanization in the mid-to-late 20th century, transforming from rural outskirts to a major city. Became a separate municipality in 1979. Known for Amadora BD festival.
            </p>
        </div>
        <div>
            <p>
            <span> Traditions:</span> Development of a distinct urban culture influenced by diverse communities. Amadora BD festival is a major cultural highlight. Growing street art scene.
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
            <span> Statistics:</span>  Historically had a reputation for higher crime rates in certain neighborhoods. Statistics generally show moderate to high rates for certain types of crime compared to quieter suburbs, typical of dense, diverse urban areas. Significant efforts in policing and urban renewal.
            </p>
        </div>
        <div>
            <p>
            <span> Perceptions:</span> Perceptions have been improving due to urban regeneration, but some areas are still viewed with caution. Safety varies significantly by neighborhood and time of day.
            </p>
        </div>
        <div>
            <p>
            <span> Cost Of Living:</span> Lower than Lisbon, Oeiras, Cascais, particularly housing. Groceries, transport, and general services are relatively affordable within the Lisbon metro context.
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
            Very busy, densely populated urban environment. High-energy, diverse. Significant ongoing urban regeneration aims to improve public spaces and image.  
            </p>
        </div>
        <div>
            <p>
            <span> Daily Life:</span> Fast-paced urban life. Commuting is central for many. Diverse cultural interactions. Strong neighborhood identities in some areas.
            </p>
        </div>
        <div>
            <p>
            <span> Social Scene:</span> Based around local cafes, restaurants, parks, and community centers. Amadora BD provides a major cultural focal point. Easy access to Lisbon's wider scene.
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
            <span> Current Trends:</span> High demand due to proximity to Lisbon, good transport links (Metro, Train), and relatively more affordable prices than Lisbon/Oeiras/Cascais. Market dominated by apartments. Significant urban regeneration efforts.
            </p>
        </div>
        <div>
            <p>
            <span> Growth Rate:</span> Strong growth driven by Lisbon spillover effect and improved urban perception, estimated 7-10% annually in recent years.
            </p>
        </div>
        <div>
            <p>
            <span> Population Impact:</span> Relatively stable population size after period of rapid growth in late 20th century. High population density.
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