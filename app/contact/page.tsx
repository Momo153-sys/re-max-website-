import React from 'react'
import HeaderComponent from '../component/headerComponent';
import styles from "../mainPage.module.css";
import FooterComponent from '../component/footerComponent';
const page = async () => {
  interface CountryInfo {
    countryName:string,
    countryFlag: string,
    countryCode: string
  }
  interface ApiResponse{
    name: {
      common:string,
    },
    idd:{
      root: string,
      suffixes: string,
    }
  }
    let countrySelect: CountryInfo[] = [];
        try{
        const response = await fetch('https://restcountries.com/v3.1/all');
        const countries = await response.json();
        countries.sort((a: ApiResponse, b: ApiResponse) => a.name.common.localeCompare(b.name.common)); // Sort alphabetically
            countrySelect = countries.map( (country:ApiResponse) => ({
                countryName: country.name.common,
                countryCode: `${country.idd.root}${country.idd.suffixes}`
            }));

    }catch(error){
        console.error('Error fetching countries:', error);
    }
    
  return (
    <>
    <HeaderComponent />
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="../images/remax-house-key.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item  ">
      <img src="../images/remax-pen.png" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item ">
      <img src="../images/remax-sign-contract.png" className="d-block w-100" alt="..." />
    </div>
  </div>
</div>
    <div className={styles.contactForm}>
    <h2 className={styles.FormTitle}>Contact</h2>
    <form className="row g-3">
  <div className="col-md-6">
    <input type="text" className="form-control" id="inputFirstName" placeholder='First Name*'required/>
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" id="inputLastName" placeholder='Last Name*'required/>
  </div>
  <div className="col-12 input-group">
  <div className="col-md-3">
    <select name="contactForm" id="contactForm" className='form-select'>
        {countrySelect.map( country => (
            <option value={country.countryName} key={country.countryName}>
                {country.countryName} {country.countryCode}
        </option>
        ))}
    </select>
  </div>
  <div className='col-md-8'>
  <input type="tel" className="form-control" id="inputAddress" placeholder="Telephone*" required/>
  </div>
  </div>
  <div className="col-12">
    <input type="email" className="form-control" id="inputEmail" placeholder='Email*' required/>
  </div>
  <div className="col-md-6">
    <input type="number" className="form-control" id="inputPostalCode" placeholder='Postal Code'/>
  </div>
  <div className="col-md-6">
    <input type="text" className="form-control" id="inputPlaceOfResidence" placeholder='Place Of Residence'/>
  </div>

  <div className="col-12">
    <label htmlFor="reasonForContact">Reason for Contact</label>
    <select name="" id="" className='form-select'>
        <option value="sellHome">Selling my Home</option>
        <option value="buyHome">Buying a Home</option>
        <option value="requestFreeVal">Request a Free Valuation</option>
        <option value="requestVal">Requesting a Valuation</option>
        <option value="becomeRealEstateAgent">Becoming a Real Estate Agent</option>
        <option value="becomeOfficeOwner">Becoming an Office Owner</option>
        <option value="other">Other</option>
    </select>
  </div>
  <textarea className="form-control" id="validationTextarea" placeholder="Message..." rows={7} required></textarea>

<label htmlFor="privacystatement">Privacy Statement <span style={{color: 'red'}}>*</span></label>
<div className="form-check">
  <input className="form-check-input" type="checkbox" value="" id="privacyStatementBox" />
  <label className="form-check-label" htmlFor="flexCheckDefault">
  This form is being saved and I agree to the <a href="/privacy" style ={{fontWeight: '700'}}>privacy statement</a>
  </label>
</div>
  <div className="col-12">
    <button type="submit" className="btn btn-primary">Send</button>
  </div>
</form>
    </div>
<FooterComponent />
    </>
  )
}

export default page