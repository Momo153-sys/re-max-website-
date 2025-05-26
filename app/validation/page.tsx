import React from 'react';
import HeaderComponent from '../component/headerComponent';
import styles from "../mainPage.module.css";
import FooterComponent from '../component/footerComponent';

const page = () => {
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
<div className={`col-12 ${styles.valuationContainer}`}>
    <div className = {styles.valuationTitle}> 
    <h1>Free <span style={{color: 'red', textAlign: 'center'}}>valuation </span> </h1>
    </div>
    <div className="card mb-3" style={{maxWidth: '80%'}}>
  <div className="row g-0">
    <div className="col-md-8">
      <div className="card-body">
        <p className="card-text">
        Are you considering selling your home and are you curious about the value of your home? Then make a no-obligation appointment with a RE/MAX real estate agent. A RE/MAX real estate agent from your neighborhood will visit you to get to know you and will immediately estimate the value of your home based on a number of factors. There are no costs associated with this no-obligation valuation.
        </p>
        <p className="card-text">
        <a href=""> 
            <button className='btn btn-primary'>Make an Appointment</button>
            </a>
        </p>
      </div>
    </div>
    <div className="col-md-4">
      <img src="../images/valuation-image-1.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
  </div>
</div>

<div className="card mb-3" style={{maxWidth: '80%'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="../images/valuation-image-2.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">
        What is a valuation?
        </h5>
        <p className="card-text">
        A valuation is a snapshot of the value of your home. Factors such as the state of maintenance and renovations play a role. The market value is influenced by the environment, the neighborhood, the location and the housing market. National trends such as falling or rising mortgage rates and government policy also affect the value of your home. RE/MAX agents have the expertise and the necessary local knowledge of the housing market to estimate the value of your home objectively and professionally. In the current dynamic housing market, it is very important to include the most recent information in the valuation of your home.
        </p>
      </div>
    </div>
  </div>
</div>

<div className="card mb-3" style={{maxWidth: '80%'}}>
  <div className="row g-0">
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">
        Is a valuation the same as an appraisal?
        </h5>
        <p className="card-text">
        This is not the case. An appraisal is an official and written report of the value of your home that must be validated by a third party. For example, you need a validated appraisal report to obtain a mortgage. Only if a third party approves the appraisal report, the lender (your bank) will accept the appraisal report.
        </p>
        <p className="card-text">
        We are also happy to help you with a (NWWI) home valuation, validated or not. All our valuers are experienced, certified and registered in the NRVT, but also with VastgoedCert or SCVM.
        </p>
      </div>
    </div>
    <div className="col-md-4">
      <img src="../images/valuation-image-3.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
  </div>
</div>

<div className="card mb-3" style={{maxWidth: '80%'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="../images/valuation-image-4.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">
        Why choose RE/MAX?
        </h5>
        <p className="card-text">
        Your RE/MAX agent is driven as an independent entrepreneur and will create a customized sales plan together with you. RE/MAX agents have local knowledge of the housing market and are experienced in guiding the first step of the sales process. They take the time for you and are available 24/7. If the agent visits for a free valuation, you can also immediately obtain information and ask questions about selling your house with RE/MAX.
        </p>
        <p className="card-text">
            <a href=""> 
            <button className='btn btn-danger'>Contact Us</button>
            </a>
        </p>
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