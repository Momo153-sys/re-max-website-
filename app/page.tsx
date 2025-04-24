import React from 'react';
import "./globals.css";
import styles from './mainPage.module.css';
import FooterComponent from './component/footerComponent';
import HeaderComponent from './component/headerComponent';

const page = () => {

 
  return (
	<>
<HeaderComponent />
<div className={styles.carousel}>
    <div className={styles.searchContainer}>
<div className={styles.filterContainer}>
<div className="btn-group">
  <button type="button" className={`btn btn-light dropdown-toggle btn-lg ${styles.filterButtons}`} data-bs-toggle="dropdown" aria-expanded="false">
    Place
  </button>
  <ul className={`dropdown-menu ${styles.checkboxContent}`}>
    <li>
      <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
</div>
</li>
    <li>
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
</div>
    </li>
    <li>
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
</div>
    </li>
  </ul>
</div>

<div className="btn-group">
  <button type="button" className={`btn btn-light dropdown-toggle btn-lg ${styles.filterButtons}`} data-bs-toggle="dropdown" aria-expanded="false">
    Office Space
  </button>
  <ul className={`dropdown-menu ${styles.checkboxContent}`}>
    <li>
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
</div>
      </li>
    <li>
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
</div>
    </li>
    <li>
    <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
</div>
    </li>
  </ul>
</div>
<div className="btn-group">
  <button type="button" className={`btn btn-light dropdown-toggle btn-lg ${styles.filterButtons}`} data-bs-toggle="dropdown" aria-expanded="false">
    Price Of
  </button>
  <ul className={`dropdown-menu ${styles.checkboxContent}`}>

    <li>
      <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
</div>
    </li>
    <li>
      <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
</div>
    </li>
    <li>
      <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
</div>
    </li>
  </ul>
</div>
<div className="btn-group">
  <button type="button" className={`btn btn-light dropdown-toggle btn-lg ${styles.filterButtons}`} data-bs-toggle="dropdown" aria-expanded="false">
    Price Up To
  </button>
  <ul className={`dropdown-menu ${styles.checkboxContent}`}>
    <li>
      <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
</div>
    </li>
    <li>
      <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
</div>
    </li>
    <li>
      <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
  </label>
</div>
    </li>
  </ul>
</div>

<button type="button" className={`btn btn-primary ${styles.filterButtons}`}>
  Search <span className="badge text-bg-secondary">4</span>
</button>
</div>

    </div>
</div>
    <div className={styles.spanTitle}>
      <h2>How can we assist you?</h2>
      </div>
  <div className={styles.offersContainer}>
    <div className={styles.serviceOffer}>
      <div>
        <img src="/images/sell-house.svg" alt="Sell House Icon" />
      </div>
      <div>
      Selling a house
      </div>
    </div>
    
    <div className={styles.serviceOffer}>
      <div>
        <img src="/images/buy-house.svg" alt="Buy House Icon" />
      </div>
      <div>
      Buying a house 
      </div>
    </div>
    <div className={styles.serviceOffer}>
      <div>
        <img src="/images/buy-house.svg" alt="Rent House Icon" />
      </div>
      <div>
      Renting a house
      </div>
    
    </div>
    <div className={styles.serviceOffer}>
      <div>
        <img src="/images/free-valuation.svg" alt="Free Valuation Icon" />
      </div>
      <div>
      free Valuation
      </div>
    
    </div>
    <div className={styles.serviceOffer}>
      <div>
        <img src="/images/become-broker.svg" alt="Become Broker Icon" />
      </div>
      <div>
    Become a broker
      </div>
      
    </div>
    <div className={styles.serviceOffer}>
      <div>
        <img src="/images/broker-office.svg" alt="Broker and Offices Icon" />
      </div>
      <div>
      Brokers & Offices
      </div>
      
    </div>
    <div className={styles.serviceOffer} style={{backgroundColor: '#1A3668'}}>
      <div>
    <img src="/images/international-sale.svg" alt="Sell WorldWide Icon" />
      </div>
      <div style={{color: 'white'}}>
      Sell Internationally
      </div>
      
    </div>

  </div>

  <div className={styles.spanTitle}>
      <h2>Explore the neigborhoods</h2>
      </div>
  <div className={styles.offersContainer} style={{backgroundColor: 'rgb(26, 54, 104)'}}>
    <div className={styles.serviceOffer}>
      <a href="/alenquer" style={{textDecoration: 'none', color: 'black'}}>
      <div>
      <h4 >Alenquer</h4>
      <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Alenquer, Portugal</small></p>
      </div>
      </a>
      
      
    </div>
    <div className={styles.serviceOffer}>
    <a href="/amadora" style={{textDecoration: 'none', color: 'black'}}>
    <div>
      <h4>Amadora</h4>
      <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Amadora, Portugal</small></p>
      </div>
      </a>
          </div>
    <div className={styles.serviceOffer}>
    <a href="/arrudaDosVinhos" style={{textDecoration: 'none', color: 'black'}}>
    <div>
      <h4>Arruda dos Vinhos</h4>
      <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Arruda dos Vinhos, Portugal</small></p>
      </div>
      </a>
          </div>
    <div className={styles.serviceOffer}>
    <a href="/azambuja" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Azambuja</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Azambuja, Portugal</small></p>
    </div>
    </a>
    </div>
    <div className={styles.serviceOffer}>
    <a href="/cadaval" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Cadaval</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Cadaval, Portugal</small></p>
    </div>
    </a>
    </div>
    <div className={styles.serviceOffer}>
    <a href="/cascais" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Cascais</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Cascais, Portugal</small></p>
    </div>
    </a>
          </div>
    <div className={styles.serviceOffer}>
    <a href="/lisbon" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Lisbon</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Lisbon, Portugal</small></p>
    </div>
    </a>
          </div>
    <div className={styles.serviceOffer}>
    <a href="/loures" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Loures</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Loures, Portugal</small></p>
    </div>
    </a>
          </div>
    <div className={styles.serviceOffer}>
    <a href="/lourinha" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Lourinhã</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Lourinhã, Portugal</small></p>
    </div>
    </a>
          </div>
    <div className={styles.serviceOffer}>
    <a href="/mafra" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Mafra</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Mafra, Portugal</small></p>
    </div>
    </a>
          </div>
    <div className={styles.serviceOffer}>
    <a href="/odivelas" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Odivelas</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Odivelas, Portugal</small></p>
    </div>
    </a>
    </div>
    <div className={styles.serviceOffer}>
    <a href="/oeiras" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Oeiras</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Oeiras, Portugal</small></p>
    </div>
    </a>
          </div>
    <div className={styles.serviceOffer}>
    <a href="/sintra" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Sintra</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Sintra, Portugal</small></p>
    </div>
    </a>
          </div>
    <div className={styles.serviceOffer}>
    <a href="/sobralDeMonteAgraco" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Sobral de Monte Agraço</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Sobral de Monte Agraço, Portugal</small></p>
    </div>
    </a>
          </div>
    <div className={styles.serviceOffer}>
    <a href="/torresVedras" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Torres Vedras</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Torres Vedras, Portugal</small></p>
    </div>
    </a>
          </div>
    <div className={styles.serviceOffer}>
    <a href="/vilaFrancaDeXira" style={{textDecoration: 'none', color: 'black'}}>
    <div>
    <h4>Vila Franca de Xira</h4>
    <p><small className="text-body-secondary" style={{textTransform: 'capitalize'}}>Find Deals in Vila Franca de Xira, Portugal</small></p>
    </div>
    </a>
          </div>

  </div>
  <div className={styles.spanTitle}>
      <h2>Recently Added</h2>
      </div>
      <div className = {styles.recentlyAddedHomes}> 
<div className={styles.homeCard}>
<div className="card">
  <div className="row g-0">
    <div className="col-md-7">
      <img src="/images/remax-flat1.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>

<div className={styles.homeCard}>
<div className="card">
  <div className="row g-0">
    <div className="col-md-7">
      <img src="/images/remax-flat1.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>

<div className={styles.homeCard}>
<div className="card">
  <div className="row g-0">
    <div className="col-md-7">
      <img src="/images/remax-flat1.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>

<div className={styles.homeCard}>
<div className="card">
  <div className="row g-0">
    <div className="col-md-7">
      <img src="/images/remax-flat1.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-4">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-body-secondary">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
</div>
</div>




<div className="d-grid gap-2 col-3 mx-auto">
<button type="button" className="btn btn-primary btn-lg"><a href="" className={styles.housesLink}> View Full Page</a></button>
</div>

<div className={styles.joinRemaxPart}>
    <div className={styles.joinComment}>
    <h2> WITH  RE/MAX  YOU FLY HIGHER! </h2>
    <p> Self-employed and an affinity with the real estate world? Discover why choosing RE/MAX is a wise decision! A decision that offers many advantages, both for your business and your personal development.</p>
    <p><button type="button" className="btn btn-danger btn-lg">join Remax</button> </p>
    </div>
    <div className={styles.joinGif}>
    <img src ="/images/parachute.gif" />
    </div>
</div>

  <FooterComponent />
	</>
  )
}

export default page