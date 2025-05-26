import React from 'react'
import styles from '../mainPage.module.css';
function footerComponent () {
  return (
    <>
    <div className = {styles.footer}>
  <div className ={styles.footerImage}>
  <img src ="/images/footer-image.png" alt='ReMax Footer Image' />
    </div>
    <div className ={styles.footerLinks}>
    <div className={styles.socialButtons}>
      <a href="https://www.linkedin.com/company/re-max-wise/" className={`${styles.socialButton} ${styles.linkedin}`}>
        <svg viewBox="0 -2 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
        <g id="Icons" stroke="none" strokeWidth="1">
            <g transform="translate(-702.000000, -265.000000)">
                <path d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z" id="LinkedIn">
    </path>
            </g>
        </g>
    </svg>
  </a>
  <a href="https://www.facebook.com/profile.php?id=61560749981542" className={`${styles.socialButton} ${styles.facebook}`}>
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 310 310" xmlSpace="preserve">
<g id="XMLID_834_">
  <path id="XMLID_835_" d="M81.703,165.106h33.981V305c0,2.762,2.238,5,5,5h57.616c2.762,0,5-2.238,5-5V165.765h39.064
    c2.54,0,4.677-1.906,4.967-4.429l5.933-51.502c0.163-1.417-0.286-2.836-1.234-3.899c-0.949-1.064-2.307-1.673-3.732-1.673h-44.996
    V71.978c0-9.732,5.24-14.667,15.576-14.667c1.473,0,29.42,0,29.42,0c2.762,0,5-2.239,5-5V5.037c0-2.762-2.238-5-5-5h-40.545
    C187.467,0.023,186.832,0,185.896,0c-7.035,0-31.488,1.381-50.804,19.151c-21.402,19.692-18.427,43.27-17.716,47.358v37.752H81.703
    c-2.762,0-5,2.238-5,5v50.844C76.703,162.867,78.941,165.106,81.703,165.106z"></path>
</g>
</svg>
  </a>
  <a href="https://www.instagram.com/remaxwise" className={`${styles.socialButton} ${styles.instagram}`}>
    <svg width="800px" height="800px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" strokeWidth="1">
        <g id="Dribbble-Light-Preview" transform="translate(-340.000000, -7439.000000)">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M289.869652,7279.12273 C288.241769,7279.19618 286.830805,7279.5942 285.691486,7280.72871 C284.548187,7281.86918 284.155147,7283.28558 284.081514,7284.89653 C284.035742,7285.90201 283.768077,7293.49818 284.544207,7295.49028 C285.067597,7296.83422 286.098457,7297.86749 287.454694,7298.39256 C288.087538,7298.63872 288.809936,7298.80547 289.869652,7298.85411 C298.730467,7299.25511 302.015089,7299.03674 303.400182,7295.49028 C303.645956,7294.859 303.815113,7294.1374 303.86188,7293.08031 C304.26686,7284.19677 303.796207,7282.27117 302.251908,7280.72871 C301.027016,7279.50685 299.5862,7278.67508 289.869652,7279.12273 M289.951245,7297.06748 C288.981083,7297.0238 288.454707,7296.86201 288.103459,7296.72603 C287.219865,7296.3826 286.556174,7295.72155 286.214876,7294.84312 C285.623823,7293.32944 285.819846,7286.14023 285.872583,7284.97693 C285.924325,7283.83745 286.155174,7282.79624 286.959165,7281.99226 C287.954203,7280.99968 289.239792,7280.51332 297.993144,7280.90837 C299.135448,7280.95998 300.179243,7281.19026 300.985224,7281.99226 C301.980262,7282.98483 302.473801,7284.28014 302.071806,7292.99991 C302.028024,7293.96767 301.865833,7294.49274 301.729513,7294.84312 C300.829003,7297.15085 298.757333,7297.47145 289.951245,7297.06748 M298.089663,7283.68956 C298.089663,7284.34665 298.623998,7284.88065 299.283709,7284.88065 C299.943419,7284.88065 300.47875,7284.34665 300.47875,7283.68956 C300.47875,7283.03248 299.943419,7282.49847 299.283709,7282.49847 C298.623998,7282.49847 298.089663,7283.03248 298.089663,7283.68956 M288.862673,7288.98792 C288.862673,7291.80286 291.150266,7294.08479 293.972194,7294.08479 C296.794123,7294.08479 299.081716,7291.80286 299.081716,7288.98792 C299.081716,7286.17298 296.794123,7283.89205 293.972194,7283.89205 C291.150266,7283.89205 288.862673,7286.17298 288.862673,7288.98792 M290.655732,7288.98792 C290.655732,7287.16159 292.140329,7285.67967 293.972194,7285.67967 C295.80406,7285.67967 297.288657,7287.16159 297.288657,7288.98792 C297.288657,7290.81525 295.80406,7292.29716 293.972194,7292.29716 C292.140329,7292.29716 290.655732,7290.81525 290.655732,7288.98792" id="instagram-[#167]">

</path>
            </g>
        </g>
    </g>
</svg>
  </a>
</div>
    </div>
  </div>
  <div className={styles.bottomLinks}>
<div className={styles.LinkGroup}>
  <h4 className={styles.linkTitle}>
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
<div className={styles.LinkGroup}>
  <h4 className={styles.linkTitle}>
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
<div className={styles.LinkGroup}>
  <h4 className={styles.linkTitle}>
  Rent
  </h4>
  <div className="list-group">
  <a href='/rental-offer' className="list-group-item list-group-item-action list-group-item-light">	Rental Offer</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Corporate Rentals</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Landlord Services</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Long-term vs Short-term Rentals</a>
</div>
</div>

<div className={styles.LinkGroup}>
  <h4 className={styles.linkTitle}>
  Services
  </h4>
  <div className="list-group">
  <a className="list-group-item list-group-item-action list-group-item-light">	Legal Support & Golden Visa Assistance</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Property Management</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Renovation & Architecture Network</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Concierge Services</a>
</div>
</div>

<div className={styles.LinkGroup}>
  <h4 className={styles.linkTitle}>
  About
  </h4>
  <div className="list-group">
  <a className="list-group-item list-group-item-action list-group-item-light">	About Us</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Meet the Team (native-speaking agents with bios)</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	RE/MAX Portugal</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	RE/MAX Worldwide</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Testimonials</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Our Values & Promise</a>

</div>
</div>

<div className={styles.LinkGroup}>
  <h4 className={styles.linkTitle}>
  Join Our Team
  </h4>
  <div className="list-group">
  <a className="list-group-item list-group-item-action list-group-item-light">	Become a Real Estate Agent</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Life at RE/MAX [add culture, photos, values]</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	AI & Tech Empowered Sales Tools</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Training & Mentorship</a>
</div>
</div>

<div className={styles.LinkGroup}>
  <h4 className={styles.linkTitle}>
  News & Blog
  </h4>
  <div className="list-group">
  <a className="list-group-item list-group-item-action list-group-item-light">	Market Updates</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Luxury Real Estate Trends</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Buying Tips for HNWIs</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Legal & Tax Insights</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Lifestyle & Interior Design</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	SEO-targeted articles (e.g. “Buying Property in Portugal as an American”)</a>

</div>
</div>

<div className={styles.LinkGroup}>
  <h4 className={styles.linkTitle}>
  Contact
  </h4>
  <div className="list-group">
  <a className="list-group-item list-group-item-action list-group-item-light">	Contact Form</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	WhatsApp Chat</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Google Maps & Office Info</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Book a Consultation CTA</a>
</div>
</div>

<div className={styles.LinkGroup}>
  <h4 className={styles.linkTitle}>
  Utility Pages
  </h4>
  <div className="list-group">
  <a className="list-group-item list-group-item-action list-group-item-light">	Privacy Policy</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Terms & Conditions</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Sitemap XML</a>
  <a className="list-group-item list-group-item-action list-group-item-light">	Cookie Settings</a>
</div>
</div>

<div className="btn-group dropup" >
  <button type="button" className={`btn dropdown-toggle ${styles.workAreasButton}`} style={{backgroundColor:'rgb(26, 54, 104)',color: 'white', border: '1px solid black'}} data-bs-toggle="dropdown" aria-expanded="false">
    Work Areas
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="/alenquer">Real Estate  Alenquer</a></li>
    <li><a className="dropdown-item" href="/amadora">Real Estate  Amadora</a></li>
    <li><a className="dropdown-item" href="/arrudaDosVinhos">Real Estate  Arruda dos Vinhos</a></li>
    <li><a className="dropdown-item" href="/azambuja">Real Estate  Azambuja</a></li>
    <li><a className="dropdown-item" href="/cadaval">Real Estate  Cadaval</a></li>
    <li><a className="dropdown-item" href="/cascais">Real Estate  Cascais</a></li>
    <li><a className="dropdown-item" href="/lisbon">Real Estate  Lisbon</a></li>
    <li><a className="dropdown-item" href="/loures">Real Estate  Loures</a></li>
    <li><a className="dropdown-item" href="/lourinha">Real Estate  Lourinhã</a></li>
    <li><a className="dropdown-item" href="/mafra">Real Estate  Mafra</a></li>
    <li><a className="dropdown-item" href="/odivelas">Real Estate  Odivelas</a></li>
    <li><a className="dropdown-item" href="/oeiras">Real Estate  Oeiras</a></li>
    <li><a className="dropdown-item" href="/sintra">Real Estate  Sintra </a></li>
    <li><a className="dropdown-item" href="/sobralDeMonteAgraco">Real Estate  Sobral de Monte Agraço </a></li>
    <li><a className="dropdown-item" href="/torresVedras">Real Estate  Torres Vedras </a></li>
    <li><a className="dropdown-item" href="/vilaFrancaDeXira">Real Estate  Vila Franca de Xira </a></li>
  </ul>
</div>
  </div>


<script src="https://static.elfsight.com/platform/platform.js" async></script>
<div className="elfsight-app-58b32a0a-99ff-4cb1-9abc-97cb15b80fb9" data-elfsight-app-lazy></div>
    </>
    
    
  )
}

export default footerComponent;