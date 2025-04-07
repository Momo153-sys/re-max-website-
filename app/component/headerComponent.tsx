import React from 'react'
import styles from '../mainPage.module.css';
const headerComponent = () => {
  return (
    <nav className="navbar bg-body-tertiary sticky-top">
		<div className="container-fluid">
			<div>
			<a className="navbar-brand" href="/">
        <img src="/images/logo-remax.png" alt="Logo" className="d-inline-block align-text-top" />
    </a>
			</div>
    <div className= {styles.navButtons}>
	<a href="/validation" style ={{textDecoration: 'none'}}> <button className= {styles.navButton}> Free Valuation
  		<span></span>
		</button></a>
    <a href="/contact" style ={{textDecoration: 'none'}}>
    <button className= {styles.navButton}> Contact
  		<span></span>
		</button>
    </a>
		
	<button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
	<div className="offcanvas offcanvas-start" tabIndex= {-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
      <img src="/images/logo-remax.png" alt="Logo" className="d-inline-block align-text-top" />
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className={`offcanvas-body ${styles.offCanvaBody}`} style={{textAlign: 'center', margin: '1% 1% 1% 1%'}}>
      <div className={styles.LinkGroup} style={{width: '100%'}}>
  <h4 className={styles.CanvaLinkTitle}>
  Offer
  </h4>
  <div className="list-group">
  <a href='/purchase-offer' className="list-group-item list-group-item-action list-group-item-light">Purchase Offer</a>
  <a href='/rental-offer' className="list-group-item list-group-item-action list-group-item-light">Rental Offer</a>
  <a href='/bog-offer' className="list-group-item list-group-item-action list-group-item-light">BOG Offer</a>
  <a  href='/total-offer' className="list-group-item list-group-item-action list-group-item-light">Total Offer</a>
</div>
</div>
<div className={styles.LinkGroup} style={{width: '100%'}}>
  <h4 className={styles.CanvaLinkTitle}>
  Services
  </h4>
  <div className="list-group">
  <a className="list-group-item list-group-item-action list-group-item-light">Buy with RE/MAX</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Selling with RE/MAX</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Selling internationally with RE/MAX</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Rent Out</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Request a Valuation (NWWI)</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Free Valuation</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Free RE/MAX Home Valuation Report</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Registration of a Home For Sale</a>
</div>
</div>
<div className={styles.LinkGroup} style={{width: '100%'}}>
  <h4 className={styles.CanvaLinkTitle}>
  About Us
  </h4>
  <div className="list-group">
  <a className="list-group-item list-group-item-action list-group-item-light">Find a Realtor</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Find an Office</a>
  <a className="list-group-item list-group-item-action list-group-item-light">About RE/MAX</a>
  <a className="list-group-item list-group-item-action list-group-item-light">RE/MAX WorldWide</a>
  <a className="list-group-item list-group-item-action list-group-item-light">News Page</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Contact</a>
</div>
</div>
<div className={styles.LinkGroup} style={{width: '100%'}}>
  <h4 className={styles.CanvaLinkTitle}>
  Brokers & Offices
  </h4>
  <div className="list-group">
  <a className="list-group-item list-group-item-action list-group-item-light">Become a Broker</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Become an Office Owner</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Franchise Formdiva RE/MAX</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Join RE/MAX</a>
</div>
</div>
      </div>
    </div>
	</div>
	
  </div>
</nav>
  )
}

export default headerComponent;