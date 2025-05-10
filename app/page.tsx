import React from 'react';
import "./globals.css";
import styles from './mainPage.module.css';
import FooterComponent from './component/footerComponent';
import HeaderComponent from './component/headerComponent';
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
    

    <div className='form-element'>
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
  

<div id="carouselExampleFade1" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/house-t4-for-sale-benavente-1.png" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/house-t4-for-sale-benavente-2.png" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/house-t4-for-sale-benavente-3.png" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/house-t4-for-sale-benavente-4.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade1" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  <div className="card-body">
  <p className="card-text" style={{color: 'red', textDecoration: 'uppercase'}}> Remax Portugal - House</p>
    <p className="card-text" style={{color: 'rgb(0, 61, 165)',fontWeight: '700',textAlign:'center'}}>
      Santo Estevão, Benavente
    </p>
    <p className="card-text">
      &euro; 1 250 000
    </p>
    <div style={{display: 'flex', justifyContent: 'space-around',margin:'1%', paddingTop:'1%', borderTop:'1px solid rgba(39, 73, 74, 0.2)',}}>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/surface.png" style={{width: '100%'}} alt=""  />
        </div>
      <div>
        <span>351</span> m&sup2;
      </div>
      </div>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/bed.png" style={{width: '20px'}} alt=""  />
        </div>
      <div>
        4
      </div>
      </div>
    
    </div>
    
    
  </div>
</div>

</div>



<div className={styles.homeCard}>

<div className="card">
  

<div id="carouselExampleFade2" className="carousel slide carousel-fade" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/house-t4-for-sale-bairro-auto-1.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/house-t4-for-sale-bairro-auto-2.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/house-t4-for-sale-bairro-auto-3.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/house-t4-for-sale-bairro-auto-4.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade2" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  <div className="card-body">
  <p className="card-text" style={{color: 'red', textDecoration: 'uppercase'}}> Remax Portugal - House</p>
    <p className="card-text" style={{color: 'rgb(0, 61, 165)',fontWeight: '700',textAlign:'center'}}>
      Porto Salvo, Oeiras
    </p>
    <p className="card-text">
      &euro; 1 350 000
    </p>
    <div style={{display: 'flex', justifyContent: 'space-around',margin:'1%', paddingTop:'1%', borderTop:'1px solid rgba(39, 73, 74, 0.2)',}}>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/surface.png" style={{width: '100%'}} alt=""  />
        </div>
      <div>
        <span>220</span> m&sup2;
      </div>
      </div>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/bed.png" style={{width: '20px'}} alt=""  />
        </div>
      <div>
        4
      </div>
      </div>
    
    </div>
    
    
  </div>
</div>



</div>




<div className={styles.homeCard}>

<div className="card">
  

<div id="carouselExampleFade3" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/house-t4-for-sale-leceia-1.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/house-t4-for-sale-leceia-2.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/house-t4-for-sale-leceia-3.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/house-t4-for-sale-leceia-4.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade3" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  <div className="card-body">
  <p className="card-text" style={{color: 'red', textDecoration: 'uppercase'}}> Remax Portugal - House</p>
    <p className="card-text" style={{color: 'rgb(0, 61, 165)',fontWeight: '700',textAlign:'center'}}>
      Barcarena, Oeiras
    </p>
    <p className="card-text">
      &euro; 1 190 000
    </p>
    <div style={{display: 'flex', justifyContent: 'space-around',margin:'1%', paddingTop:'1%', borderTop:'1px solid rgba(39, 73, 74, 0.2)',}}>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/surface.png" style={{width: '100%'}} alt=""  />
        </div>
      <div>
        <span>175</span> m&sup2;
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
  

<div id="carouselExampleFade4" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/apartment-t3-cascais-1.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/apartment-t3-cascais-2.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/apartment-t3-cascais-3.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/apartment-t3-cascais-4.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade4" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade4" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  <div className="card-body">
  <p className="card-text" style={{color: 'red', textDecoration: 'uppercase'}}> Remax Portugal - Apartment</p>
    <p className="card-text" style={{color: 'rgb(0, 61, 165)',fontWeight: '700',textAlign:'center'}}>
      Carcavelos e Parede, Cascais
    </p>
    <p className="card-text">
      &euro; 2 500 / Monthly
    </p>
    <div style={{display: 'flex', justifyContent: 'space-around',margin:'1%', paddingTop:'1%', borderTop:'1px solid rgba(39, 73, 74, 0.2)',}}>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/surface.png" style={{width: '100%'}} alt=""  />
        </div>
      <div>
        <span>120</span> m&sup2;
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
  

<div id="carouselExampleFade5" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/apartment-t2-ajuda-1.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/apartment-t2-ajuda-2.png" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/apartment-t2-ajuda-3.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/apartment-t2-ajuda-4.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade5" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade5" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  <div className="card-body">
  <p className="card-text" style={{color: 'red', textDecoration: 'uppercase'}}> Remax Portugal - Apartment</p>
    <p className="card-text" style={{color: 'rgb(0, 61, 165)',fontWeight: '700',textAlign:'center'}}>
      Belém, Lisbon
    </p>
    <p className="card-text">
      &euro; 390 000 
    </p>
    <div style={{display: 'flex', justifyContent: 'space-around',margin:'1%', paddingTop:'1%', borderTop:'1px solid rgba(39, 73, 74, 0.2)',}}>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/surface.png" style={{width: '100%'}} alt=""  />
        </div>
      <div>
        <span>52</span> m&sup2;
      </div>
      </div>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/bed.png" style={{width: '20px'}} alt=""  />
        </div>
      <div>
        2
      </div>
      </div>
    
    </div>
    
    
  </div>
</div>



</div>



<div className={styles.homeCard}>

<div className="card">
  

<div id="carouselExampleFade6" className="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/images/house-t7-oeiras-1.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/house-t7-oeiras-2.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/house-t7-oeiras-3.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
    <div className="carousel-item">
      <img src="/images/house-t7-oeiras-4.jpg" className="d-block w-100" alt="House Image" style={{aspectRatio: '16/9', width: '100%', objectFit: 'cover'}} />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade6" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade6" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

  <div className="card-body">
  <p className="card-text" style={{color: 'red', textDecoration: 'uppercase'}}> Remax Portugal - House</p>
    <p className="card-text" style={{color: 'rgb(0, 61, 165)',fontWeight: '700',textAlign:'center'}}>
      Carnaxide e Queijas, Oeiras
    </p>
    <p className="card-text">
      &euro; 1 300 000 
    </p>
    <div style={{display: 'flex', justifyContent: 'space-around',margin:'1%', paddingTop:'1%', borderTop:'1px solid rgba(39, 73, 74, 0.2)',}}>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/surface.png" style={{width: '100%'}} alt=""  />
        </div>
      <div>
        <span>200</span> m&sup2;
      </div>
      </div>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/bed.png" style={{width: '20px'}} alt=""  />
        </div>
      <div>
        7
      </div>
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
    <p><button type="button" className="btn btn-danger btn-lg">Join Remax</button> </p>
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