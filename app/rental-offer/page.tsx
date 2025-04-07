import React from 'react'
import HeaderComponent from '../component/headerComponent';
import styles from "../mainPage.module.css";
import FooterComponent from '../component/footerComponent';
const page = () => {
  return (
    <>
    <HeaderComponent />
    <section className={styles.offersSection}>
    <h2 className={styles.offerTitle}>Rental Offers</h2>
    </section>
    <div className ={styles.filterSection}>
        <div className = {styles.houseFilterContainer}> 
        <input type="text" className="form-control" placeholder="Search by Location..." aria-label="Location" aria-describedby="basic-addon1" />
        </div>
        <div className = {styles.houseFilterContainer}>
        <select className="form-select" aria-label="Default select example">
  <option selected>Price Of</option>
  <option value="noPreference">No Preference</option>
  <option value="two-fifty"> &euro; 250,-</option>
  <option value="3">&euro; 500,-</option>
  <option value="1">&euro; 750,-</option>
  <option value="2">&euro; 1000,-</option>
  <option value="3">&euro; 1500,-</option>
  <option value="3">&euro; 2500,-</option>
</select>
             </div>
        <div className = {styles.houseFilterContainer}>
        <select className="form-select" aria-label="Default select example">
  <option selected>Price Up To</option>
  <option value="noPreference">No Preference</option>
  <option value="two-fifty"> &euro; 250,-</option>
  <option value="3">&euro; 500,-</option>
  <option value="1">&euro; 750,-</option>
  <option value="2">&euro; 1000,-</option>
  <option value="3">&euro; 1500,-</option>
  <option value="3">&euro; 2500,-</option>
</select>
             </div>
        <div className = {styles.houseFilterContainer}>
        <button className ="btn btn-danger btn-lg" style ={{textAlign:'center'}} > Search </button>
             </div>
    </div>
    <div className ={styles.homeBigContainer}>
        <div className={`col-12 ${styles.homeFoundContainer}`}>
            <div className={styles.homeFoundTitle}>
    <h2> 5 Homes Found</h2>
            </div>
            <div className={styles.houseSortContainer}>
        Sort By: <select className="form-select" aria-label="Default select example">
  <option selected>Choose an Option</option>
  <option value="noPreference">Price Low-High</option>
  <option value="two-fifty"> Price High-Low</option>
  <option value="3">Address</option>
  <option value="1">Place</option>
  <option value="2">Date New-Old</option>
  <option value="3">Date Old-New</option>
</select>
            </div>
        </div>
        
        </div>
        <div className={styles.homesGridContainer}>
            <div className={styles.homeSearchFilter}>
            <div className={styles.refineResultsTitle}> Refine Results  </div>
            <h4 className={styles.filtertitle}> Office</h4>
            <select className="form-select" aria-label="Default select example" style ={{width: '50%',textAlign: 'center',marginLeft: '25%'}}>
  <option selected>Choose an Option</option>
  <option value="noPreference">Price Low-High</option>
  <option value="two-fifty"> Price High-Low</option>
  <option value="3">Address</option>
  <option value="1">Place</option>
  <option value="2">Date New-Old</option>
  <option value="3">Date Old-New</option>
</select> <br />
<h4 className={styles.filtertitle}> Type of Property</h4>
  <input type="radio" name="typeOfhouse" id="residential" /> <label htmlFor="residential">Residential House</label><br />
  <input type="radio" name="typeOfhouse" id="apartment" /> <label htmlFor="apartment">Apartment</label><br />
  <input type="radio" name="typeOfhouse" id="buildingPlot" /> <label htmlFor="buildingPlot">Building Plot</label> <br />
  <br />
  <h4 className={styles.filtertitle}> Number of Rooms</h4>
  <input type="radio" name="numberOfRooms" id="one" /> <label htmlFor="one">1</label><br />
  <input type="radio" name="numberOfRooms" id="two" /> <label htmlFor="two">2</label><br />
  <input type="radio" name="numberOfRooms" id="three" /> <label htmlFor="three">3</label><br />
  <input type="radio" name="numberOfRooms" id="four" /> <label htmlFor="four">4 </label><br />
  <input type="radio" name="numberOfRooms" id="fiveOrPlus" /> <label htmlFor="fiveOrPlus">5+</label><br />
  <br />
  <h4 className={styles.filtertitle}> Living Area</h4>
  <input type="radio" name="livingArea" id="fiftyPlus" /> <label htmlFor="fiftyPlus">50+ m&sup2;</label><br />
  <input type="radio" name="livingArea" id="seventyFivePlus" /> <label htmlFor="seventyFivePlus">75+ m&sup2;</label><br />
  <input type="radio" name="livingArea" id="hundredPlus" /> <label htmlFor="hundredPlus">100+ m&sup2;</label> <br />
  <input type="radio" name="livingArea" id="hundredTwentyFivePlus" /> <label htmlFor="hundredTwentyFivePlus">125+ m&sup2;</label><br />
  <input type="radio" name="livingArea" id="hundredFiftyPlus" /> <label htmlFor="hundredFiftyPlus">150+ m&sup2;</label><br />
  <input type="radio" name="livingArea" id="hundredSeventyFivePlus" /> <label htmlFor="hundredSeventyFivePlus">175+ m&sup2;</label><br />
  <input type="radio" name="livingArea" id="twoHundredPlus" /> <label htmlFor="twoHundredPlus">200+ m&sup2;</label><br />
  <br />
  <h4 className={styles.filtertitle}> Construction Period</h4>
  <input type="radio" name="constructionPeriod" id="beforeNineteenOSix" /> <label htmlFor="beforeNineteenOSix">Before 1906</label><br />
  <input type="radio" name="constructionPeriod" id="OSixToThirty" /> <label htmlFor="OSixToThirty">1906-1930</label><br />
  <input type="radio" name="constructionPeriod" id="ThirtyOneToFourtyFour" /> <label htmlFor="ThirtyOneToFourtyFour">1931-1944</label> <br />
  <input type="radio" name="constructionPeriod" id="FourtyFiveToFiftyNine" /> <label htmlFor="FourtyFiveToFiftyNine">1945-1959</label><br />
  <input type="radio" name="constructionPeriod" id="SixtyToSeventy" /> <label htmlFor="SixtyToSeventy">1960-1970</label><br />
  <input type="radio" name="constructionPeriod" id="SeventyOneToEighty" /> <label htmlFor="SeventyOneToEighty">1971-1980</label><br />
  <input type="radio" name="constructionPeriod" id="EightyOneToNinety" /> <label htmlFor="EightyOneToNinety">1981-1990</label><br />
  <input type="radio" name="constructionPeriod" id="NinetyOneToOO" /> <label htmlFor="NinetyOneToOO">1991-2000</label><br />
  <input type="radio" name="constructionPeriod" id="OOnetoTwentyTen" /> <label htmlFor="OOnetoTwentyTen">2001-2010</label><br />
  <input type="radio" name="constructionPeriod" id="afterTwentyTen" /> <label htmlFor="afterTwentyTen">After 2010</label><br />
            </div>
            <div className={styles.homesGrid}>
            <div className={styles.homeCard}>

<div className="card">
  <img src="/images/remax-flat1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

<div className={styles.homeCard}>

<div className="card">
  <img src="/images/remax-flat1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

<div className={styles.homeCard}>

<div className="card">
  <img src="/images/remax-flat1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>

<div className={styles.homeCard}>

<div className="card">
  <img src="/images/remax-flat1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
<div className={styles.homeCard}>

<div className="card">
  <img src="/images/remax-flat1.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
</div>
            </div>
        </div>
    <FooterComponent />
    </>
  )
}

export default page