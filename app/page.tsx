import React from 'react';
import "./globals.css";
import styles from './mainPage.module.css';
import FooterComponent from './component/footerComponent';
import HeaderComponent from './component/headerComponent';
import HouseListComponent from './component/houseListComponent';
const neighborhoods: String[] = [
  "Alenquer", "Amadora", "Arruda dos Vinhos","Azambuja","Cadaval","Cascais","Lisbon","Loures","Lourinhã","Mafra",
  "Odivelas","Oeiras","Sintra","Sobral de Monte Agraço","Torres Vedras","Vila Franca de Xira"
];
const prices: String[] = [
  "500,000", "750,000","1,000,000", "1,500,000","2,000,000","2,500,000","3,000,000","4,000,000"
];
const page = () => {

 
  return (
	<>
  <link
    rel="preload"
    as="image"
    href="/images/webp/carousel-family.webp"
    type="images/webp"
  />
<HeaderComponent />
<div className={styles.carousel}>
    <div className={styles.searchContainer}>
<div className={styles.filterContainer}>
  <div className={`dropdown ${styles.formSelect}`}>
  <button type="button" className={`btn btn-light dropdown-toggle btn-lg ${styles.filterButtons}`} data-bs-toggle="dropdown" aria-expanded="false">
    Neighborhood
  </button>
  <ul className={`dropdown-menu ${styles.checkboxContent}`}>
   {neighborhoods.map((neighborhood,index) =>(
    <li key={index}>
      <div className="form-check">
  <input className="form-check-input" type="checkbox" value={`${neighborhood}`} id={`neighborhood-${index}`} />
  <label className="form-check-label" htmlFor={`neighborhood-${index}`}>
    {neighborhood}
  </label>
</div>
</li>
   ))}
    
    
  </ul>
</div>


    <div className='form-element'>
  <select className={`form-select ${styles.formSelect}`} aria-label="Default select example" style={{width: '100%', height: '100%',marginTop:'3%',textAlign:'center',fontSize: '20px'}}>
  <option defaultValue="allListings">All Listings</option>
  <option value="LuxuryVillasForSales">Luxury Villas for Sale</option>
  <option value="ApartmentsInLisbon">Apartments in Lisbon</option>
  <option value="BeachfrontProperties">Beachfront Properties</option>
  <option value="InvestmentProperties">Investment Properties</option>
  <option value="NewDevelopments">New Developments</option>
  <option value="RemaxPortugalMLSListings">Remax Portugal MLS Listings</option>
</select>
</div>

    
    <div className='form-element'>
  <select className={`form-select ${styles.formSelect}`} aria-label="Default select example" style={{width: '100%', height: '100%',marginTop:'5%',textAlign:'center',fontSize: '20px'}}>
  <option defaultValue="Default">Price Of</option>
  <option value="NoPreferences">No Preferences</option>
  {prices.map((price,index) =>(
    <option key={index} value={`option-${index}`}> 
    &euro; {price}
    </option>
  ))}
</select>
</div>


    <div className='form-element'>
  <select className={`form-select ${styles.formSelect}`} aria-label="Default select example" style={{width: '100%', height: '100%',marginTop:'5%',textAlign:'center',fontSize: '20px'}}>
  <option defaultValue="Default">Price Up To</option>
  <option value="NoPreferences">No Preferences</option>
  {prices.map((price,index) =>(
    <option key={index} value={`option-${index}`}> 
    &euro; {price}
    </option>
  ))}
</select>
</div>
    

    <div className='form-element' style={{'marginTop': '10px'}}>
<button type="button" className={`btn btn-primary ${styles.filterButtons}`}>
  <a href="/purchase-offer" className={styles.filterButtons} style={{textDecoration: 'none', color: 'white'}}>
  Find Listing
    </a> 
</button>
</div>
    </div>


    </div>
</div>
    <div className={styles.spanTitle}>
      <h2>How can we assist you?</h2>
      </div>
  <div className={styles.offersContainer}>
    <div className={styles.serviceOffer}>
      <div>
        <img src="/images/sell-house.svg" loading="lazy" alt="Sell House Icon" />
      </div>
      <div>
      Selling a house
      </div>
    </div>
    
    <div className={styles.serviceOffer}>
      <div>
        <img src="/images/buy-house.svg" loading="lazy" alt="Buy House Icon" />
      </div>
      <div>
      Buying a house 
      </div>
    </div>
    <div className={styles.serviceOffer}>
      <div>
        <img src="/images/buy-house.svg" loading="lazy" alt="Rent House Icon" />
      </div>
      <div>
      Renting a house
      </div>
    
    </div>
    <div className={styles.serviceOffer}>
      <div>
        <img src="/images/free-valuation.svg" loading="lazy" alt="Free Valuation Icon" />
      </div>
      <div>
      free Valuation
      </div>
    
    </div>
    <div className={styles.serviceOffer}>
      <div>
        <img src="/images/become-broker.svg" loading="lazy" alt="Become Broker Icon" />
      </div>
      <div>
    Become a broker
      </div>
      
    </div>
    <div className={styles.serviceOffer}>
      <div>
        <img src="/images/broker-office.svg" loading="lazy" alt="Broker and Offices Icon" />
      </div>
      <div>
      Brokers & Offices
      </div>
      
    </div>
    <div className={styles.serviceOffer} style={{backgroundColor: '#1A3668'}}>
      <div>
    <img src="/images/international-sale.svg" loading="lazy" alt="Sell WorldWide Icon" />
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
      <HouseListComponent />

<div className="d-grid gap-2 col-3 mx-auto">
<button type="button" className="btn btn-primary btn-lg"><a href="" className={styles.housesLink}> View Full Page</a></button>
</div>

<div className={styles.joinRemaxPart}>
    <div className={styles.joinComment}>
    <h2> WITH  RE/MAX  YOU FLY HIGHER! </h2>
    <p> Self-employed and an affinity with the real estate world? Discover why choosing RE/MAX is a wise decision! A decision that offers many advantages, both for your business and your personal development.</p>
    <p> <a href="/contact">
    <button type="button" className="btn btn-danger btn-lg">Join Remax</button>
      </a> </p>
    </div>
    <div className={styles.joinGif}>
    <img src ="/images/parachute.gif" loading="lazy" alt='Remax Gif' />
    </div>
</div>

  <FooterComponent />
	</>
  )
}

export default page
