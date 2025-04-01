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
    <div className="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
  <label className="btn btn-outline-danger" htmlFor="btncheck1">Total Offer</label>

  <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
  <label className="btn btn-outline-danger" htmlFor="btncheck2">Buy Homes</label>

  <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
  <label className="btn btn-outline-danger" htmlFor="btncheck3">Rental Properties</label>

  <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off" />
  <label className="btn btn-outline-danger" htmlFor="btncheck4">Commercial Buildings</label>
</div>
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
<div className={styles.texts}>
    <div className={styles.firstText}> 
    RE/MAX is the world's number one real estate brokerage
    </div>
    <div className={styles.secondText}>
    RE/MAX has over 50 years of experience
    </div>
    <div className={styles.thirdText}>
    Every 30 seconds RE/MAX sells a home
    </div>
</div>

<div className={styles.grids}>
  <div className={styles.homeInfoBox}>
  <div className={styles.homeFirstGrid}>
      <div className={styles.homeStatus}>New</div>
    </div>
    <div className={styles.homeInfo}>
        Hello
      </div>
  </div>
    
    <div className={styles.homeInfoBox}>
    <div className={styles.homesecondGrid}>
    <div className={styles.homeStatus}>New</div>
    </div>
    <div className={styles.homeInfo}>
        Hello
      </div>
    </div>
    
    <div className={styles.homeInfoBox}>
    <div className={styles.homethirdGrid}>
    <div className={styles.homeStatus}>New</div>

    </div>
    <div className={styles.homeInfo}>
        Hello
      </div>
    </div>
    
    <div className={styles.homeInfoBox}>
    <div className={styles.homefourthGrid}>
    <div className={styles.homeStatus}>New</div>
    
    </div>
    <div className={styles.homeInfo}>
        Hello
      </div>
    </div>
    
    <div className={styles.homeInfoBox}>
    <div className={styles.homefifthGrid}>
    <div className={styles.homeStatus}>New</div>
    </div>
    <div className={styles.homeInfo}>
        Hello
      </div>
    </div>
    
    <div className={styles.homeInfoBox}>
    <div className={styles.homesixthGrid}>
    <div className={styles.homeStatus}>New</div>
    </div>
    <div className={styles.homeInfo}>
        Hello
      </div>
    </div>
    
</div>

<div className ={styles.spanTitleContiner}>
  <span className={styles.spantitle}> Featured Homes</span>
</div>


<div className={styles.grids}>
    <div className={styles.firstGrid}>
      <h2> Selling your home?</h2>
      <p> Fast, straightforward and at the best possible price </p>
    </div>
    <div className={styles.secondGrid}>
    <h2> Selling your home?</h2>
      <p> Fast, straightforward and at the best possible price </p>
    </div>
    <div className={styles.thirdGrid}>
    <h2> Selling your home?</h2>
      <p> Fast, straightforward and at the best possible price </p>
    </div>
    <div className={styles.fourthGrid}>
    <h2> Selling your home?</h2>
      <p> Fast, straightforward and at the best possible price </p>
    </div>
    <div className={styles.fifthGrid}>
    <h2> Selling your home?</h2>
      <p> Fast, straightforward and at the best possible price </p>
    </div>
    <div className={styles.sixthGrid}>
    <h2> Selling your home?</h2>
      <p> Fast, straightforward and at the best possible price </p>
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
