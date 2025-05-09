import React from 'react'
import styles from '../mainPage.module.css';
import Link from 'next/link';
const headerComponent = () => {
  return (
    <nav className={`navbar sticky-top ${styles.navBar}`} style={{backgroundColor: '#1a3668', display: 'flex', flexDirection: 'column'}} >
		<div className="container-fluid">
			<div className='logo' style={{width: '20%'}}>
        <Link href ="/" className="navbar-brand">
        <img src="/images/logo-remax-official.png" alt="Logo" className="d-inline-block align-text-top" />
        </Link>
        
  
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
	<div className="offcanvas offcanvas-start" tabIndex= {-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" style={{backgroundColor: '#1a3668'}}>
      <div className="offcanvas-header">
      <img src="/images/logo-remax-official.png" alt="Logo" className="d-inline-block align-text-top" style={{width: '50%'}} />
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className={`offcanvas-body ${styles.offCanvaBody}`} style={{textAlign: 'center', margin: '1% 1% 1% 1%'}}>
<div className={styles.LinkGroup} style={{width: '100%'}}>
  <h4 className={styles.CanvaLinkTitle}>
  Buy
  </h4>
  <div className="list-group">
  <a href='/purchase-offer' className="list-group-item list-group-item-action list-group-item-light">Buy with RE/MAX</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Relocation for Families</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Selling internationally with RE/MAX</a>
  <a className="list-group-item list-group-item-action list-group-item-light">International Buyers Guide </a>
  <a className="list-group-item list-group-item-action list-group-item-light">Financing / Mortgages</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Property Tax & Legal Guide</a>
  <a className="list-group-item list-group-item-action list-group-item-light">Golden Visa</a>
</div>
</div>
<div className={styles.LinkGroup} style={{width: '100%'}}>
  <h4 className={styles.CanvaLinkTitle}>
  Sell
  </h4>
  <div className="list-group">
  <a className="list-group-item list-group-item-action list-group-item-light">	Selling with RE/MAX</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Selling Internationally</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Request a Free Valuation</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Premium Marketing for Luxury Homes</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Home Staging & Photography Services</a>
</div>
</div>
<div className={styles.LinkGroup} style={{width: '100%'}}>
  <h4 className={styles.CanvaLinkTitle}>
  Rent
  </h4>
  <div className="list-group">
  <a href='/rental-offer' className="list-group-item list-group-item-action list-group-item-light">	Rental Offer</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Corporate Rentals</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Landlord Services</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Long-term vs Short-term Rentals</a>
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