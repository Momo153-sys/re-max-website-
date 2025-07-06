"use client";

import React, {useEffect,useState} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import SwiperCore from 'swiper';
import Content from '../component/houseContentInterface';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "../houseViewPage.module.css";
SwiperCore.use([Navigation, Thumbs]);




const Page = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
    const [url, setUrl] = useState("");

  useEffect(() => {
    // This code only runs on the client
    const storedUrl = sessionStorage.getItem("selectedImage") ?? "";
    setUrl(storedUrl);
  }, []);


let content: Content = {
    images: [],
    description: '',
    private_gross_area: '',
    gross_area: '',
    total_lot_size: '',
    living_area: '',
    construction_year: '',
    bathrooms: '',
    bedrooms: '',
    elevator: '',
    electric_car_charging: '',
    asking_price: '',
    location: ''

}

    
   
if (url?.includes('apartment') && url?.includes('ajuda')) {
    content = {
        images: [
            '/images/apartment-t2-ajuda-1.jpg',
            '/images/apartment-t2-ajuda-2.png',
            '/images/apartment-t2-ajuda-3.jpg',
            '/images/apartment-t2-ajuda-4.jpg',
            '/images/apartment-t2-ajuda-5.jpg',
            '/images/apartment-t2-ajuda-6.jpg',
            '/images/apartment-t2-ajuda-7.jpg',
            '/images/apartment-t2-ajuda-8.jpg',
            '/images/apartment-t2-ajuda-9.jpg',
            '/images/apartment-t2-ajuda-10.jpg'
        ],
        location: 'Belém, Lisbon',
        description: "Condo/Apartment T2 for sale",
        private_gross_area: '52',
        gross_area: '--',
        total_lot_size: '--',
        living_area: '52',
        construction_year: '1964',
        bathrooms: '1',
        bedrooms: '2',
        elevator: 'No',
        electric_car_charging: 'No',
        asking_price: '390 000'
    };

}else if(url?.includes('apartment') && url?.includes('cascais')){

    content = {
        images: [
            '/images/apartment-t3-cascais-1.jpg',
            '/images/apartment-t3-cascais-2.jpg',
            '/images/apartment-t3-cascais-3.jpg',
            '/images/apartment-t3-cascais-4.jpg',
            '/images/apartment-t3-cascais-5.jpg',
            '/images/apartment-t3-cascais-6.jpg',
            '/images/apartment-t3-cascais-7.jpg',
            '/images/apartment-t3-cascais-8.jpg',
            '/images/apartment-t3-cascais-9.jpg',
            '/images/apartment-t3-cascais-10.jpg'
        ],
        description: "Condo/Apartment T2 for lease Housing Permit - 340",
        private_gross_area: '120',
        gross_area: '525',
        total_lot_size: '--',
        living_area: '525',
        construction_year: '1986',
        bathrooms: '2',
        bedrooms: '3',
        elevator: 'Yes',
        electric_car_charging: 'No',
        asking_price: '2 500 (monthly)',
        location: 'Carcavelos e Parede, Cascais'
    };

}else if(url?.includes('house') && url?.includes('bairro-auto')){

    content = {
        images: [
            '/images/house-t4-for-sale-bairro-auto-1.jpg',
            '/images/house-t4-for-sale-bairro-auto-2.jpg',
            '/images/house-t4-for-sale-bairro-auto-3.jpg',
            '/images/house-t4-for-sale-bairro-auto-4.jpg',
            '/images/house-t4-for-sale-bairro-auto-5.jpg',
            '/images/house-t4-for-sale-bairro-auto-6.jpg',
        ],
        description: "House T4 for sale",
        private_gross_area: '220',
        gross_area: '214,77',
        total_lot_size: '421',
        living_area: '181',
        construction_year: '2026',
        bathrooms: '3',
        bedrooms: '4',
        elevator: 'No',
        electric_car_charging: 'Yes',
        asking_price: '1 350 000',
        location: 'Porto Salvo, Oeiras'
    };

}else if(url?.includes('house') && url?.includes('benavente')){
content = {
        images: [
            '/images/house-t4-for-sale-benavente-1.png','/images/house-t4-for-sale-benavente-2.png','/images/house-t4-for-sale-benavente-3.png','/images/house-t4-for-sale-benavente-4.jpg','/images/house-t4-for-sale-benavente-5.jpg','/images/house-t4-for-sale-benavente-6.jpg',
            '/images/house-t4-for-sale-benavente-7.jpg','/images/house-t4-for-sale-benavente-8.jpg','/images/house-t4-for-sale-benavente-9.jpg','/images/house-t4-for-sale-benavente-10.jpg','/images/house-t4-for-sale-benavente-11.jpg','/images/house-t4-for-sale-benavente-12.jpg',
            '/images/house-t4-for-sale-benavente-13.jpg','/images/house-t4-for-sale-benavente-14.jpg','/images/house-t4-for-sale-benavente-15.jpg','/images/house-t4-for-sale-benavente-16.jpg','/images/house-t4-for-sale-benavente-17.jpg','/images/house-t4-for-sale-benavente-18.jpg',
            '/images/house-t4-for-sale-benavente-19.jpg','/images/house-t4-for-sale-benavente-20.jpg','/images/house-t4-for-sale-benavente-21.jpg','/images/house-t4-for-sale-benavente-22.jpg','/images/house-t4-for-sale-benavente-23.jpg','/images/house-t4-for-sale-benavente-24.jpg',
            '/images/house-t4-for-sale-benavente-25.jpg','/images/house-t4-for-sale-benavente-26.jpg','/images/house-t4-for-sale-benavente-27.jpg','/images/house-t4-for-sale-benavente-28.jpg','/images/house-t4-for-sale-benavente-29.jpg','/images/house-t4-for-sale-benavente-30.jpg',
            '/images/house-t4-for-sale-benavente-31.jpg','/images/house-t4-for-sale-benavente-32.jpg','/images/house-t4-for-sale-benavente-33.jpg','/images/house-t4-for-sale-benavente-34.jpg','/images/house-t4-for-sale-benavente-35.jpg','/images/house-t4-for-sale-benavente-36.jpg',
            '/images/house-t4-for-sale-benavente-37.jpg','/images/house-t4-for-sale-benavente-38.jpg','/images/house-t4-for-sale-benavente-39.jpg','/images/house-t4-for-sale-benavente-40.jpg','/images/house-t4-for-sale-benavente-41.jpg','/images/house-t4-for-sale-benavente-42.jpg',
            '/images/house-t4-for-sale-benavente-43.jpg','/images/house-t4-for-sale-benavente-44.jpg','/images/house-t4-for-sale-benavente-45.jpg','/images/house-t4-for-sale-benavente-46.jpg'
        ],
        description: "Just 40 minutes from Lisbon, this 471 m² villa on a 2,700 m² plot combines comfort, privacy, and a sophisticated lifestyle in perfect harmony with nature. Situated in Santo Estêvão, one of the most sought-after destinations for those who value tranquility and quality of life, with quick access to the city. Thoughtfully designed architecture for comfort and functionality, featuring high-end materials and top-quality finishes.",
        private_gross_area: '351',
        gross_area: '471',
        total_lot_size: '2 702',
        living_area: '377',
        construction_year: '2006',
        bathrooms: '5',
        bedrooms: '4',
        elevator: 'No',
        electric_car_charging: 'No',
        asking_price: '1 250 000',
        location: 'Santo Estevão, Benavente'
    };

}else if(url?.includes('house') && url?.includes('leceia')){

    content = {
        images: [
            '/images/house-t4-for-sale-leceia-1.jpg','/images/house-t4-for-sale-leceia-2.jpg','/images/house-t4-for-sale-leceia-3.jpg','/images/house-t4-for-sale-leceia-4.jpg','/images/house-t4-for-sale-leceia-5.jpg','/images/house-t4-for-sale-leceia-6.jpg',
            '/images/house-t4-for-sale-leceia-7.jpg','/images/house-t4-for-sale-leceia-8.jpg','/images/house-t4-for-sale-leceia-9.jpg','/images/house-t4-for-sale-leceia-10.jpg','/images/house-t4-for-sale-leceia-12.jpg',
            '/images/house-t4-for-sale-leceia-13.jpg','/images/house-t4-for-sale-leceia-14.jpg','/images/house-t4-for-sale-leceia-15.jpg','/images/house-t4-for-sale-leceia-16.jpg','/images/house-t4-for-sale-leceia-17.jpg','/images/house-t4-for-sale-leceia-18.jpg',
            '/images/house-t4-for-sale-leceia-19.jpg','/images/house-t4-for-sale-leceia-20.jpg','/images/house-t4-for-sale-leceia-21.jpg','/images/house-t4-for-sale-leceia-22.jpg','/images/house-t4-for-sale-leceia-23.jpg','/images/house-t4-for-sale-leceia-24.jpg',
            '/images/house-t4-for-sale-leceia-25.jpg','/images/house-t4-for-sale-leceia-26.jpg','/images/house-t4-for-sale-leceia-27.jpg','/images/house-t4-for-sale-leceia-28.jpg','/images/house-t4-for-sale-leceia-29.jpg','/images/house-t4-for-sale-leceia-30.jpg',
        ],
        description: "House T3 for sale",
        private_gross_area: '175',
        gross_area: '--',
        total_lot_size: '387',
        living_area: '135',
        construction_year: '2024',
        bathrooms: '5',
        bedrooms: '3',
        elevator: 'No',
        electric_car_charging: 'No',
        asking_price: '1 190 000',
        location: 'Barcarena, Oeiras'
    };

}else if(url?.includes('house') && url?.includes('oeiras')){

    content = {
        images: [
            '/images/house-t7-oeiras-1.jpg','/images/house-t7-oeiras-2.jpg','/images/house-t7-oeiras-3.jpg','/images/house-t7-oeiras-4.jpg','/images/house-t7-oeiras-5.jpg','/images/house-t7-oeiras-6.jpg',
            '/images/house-t7-oeiras-7.jpg','/images/house-t7-oeiras-8.jpg','/images/house-t7-oeiras-9.jpg','/images/house-t7-oeiras-10.jpg',
        ],
        description: "House T7 for sale",
        private_gross_area: '200',
        gross_area: '--',
        total_lot_size: '--',
        living_area: '280',
        construction_year: '1974',
        bathrooms: '4',
        bedrooms: '7',
        elevator: 'No',
        electric_car_charging: 'Yes',
        asking_price: '1 300 000',
        location: 'Carnaxide e Queijas, Oeiras'
    };

}


  return (
    <>
    <div className={styles.houseInfo}>
    <div className="col-12 col-lg-7 col-xl-8">
      {/* Main slider */}
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        className="main-slider"
      >
        {content.images.map((src, idx) => (
          <SwiperSlide key={`${idx}`}>
            <img
              src={src}
              alt={`Remax Portugal listing - Image ${idx + 1}`}
              style={{ width: '100%' }}
              loading="lazy"
            />
          </SwiperSlide>
        ))}

        {/* Custom navigation buttons */}
        <div className="swiper-buttons">
          <div className="swiper-button-prev"><i className="icon-caret-left"></i></div>
          <div className="swiper-button-next"><i className="icon-caret-right"></i></div>
        </div>
      </Swiper>

      {/* Thumbnails slider */}
      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        className="thumbs-container mt-3"
        style={{ cursor: 'pointer' }}
      >
        {content.images.map((src, idx) => (
          <SwiperSlide key={`thumb-${idx}`} className="thumb-slide">
            <img src={src} alt={`Thumbnail ${idx + 1}`} loading="lazy" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

    <div className="card text-center" style={{backgroundColor: 'rgb(26, 54, 104)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
  <div className="card-header">
    House Info
  </div>
  <div className="card-body">
    <h3 className="card-title"> {content.location} </h3>
    <h5 className="card-title"> 
    Asking Price <br />
    &euro; {content.asking_price}
     </h5>
    <p className="card-text">
            Living Area : {content.living_area} m&sup2; <br />
            Number Of Rooms: {`${content.bedrooms} + 1`}
    </p>
    <h3 className="card-title"> Interested? </h3>
    <a href="#contact-form" className="btn btn-danger btn-lg">Contact Us!</a>
  </div>
</div>

    </div>

    <div className={styles.middlePageLinksContainer}>
            <div>
            <a href="#description" className={styles.middlePageLinks}> description </a>
            </div>
            <div>
            <a href="#features" className={styles.middlePageLinks}> features </a>
            </div>
            <div>
            <a href="#photos" className={styles.middlePageLinks}> photos </a>
            </div>
            <div>
            <a href="#more-information" className={styles.middlePageLinks} style={{color: 'red'}}> more information </a>
            </div>
    </div>
        <div className={styles.houseDescriptionContainer}>
            <h3 className="text-center" id="description">
                Description
                </h3>
                        <figure className="text-center">
                <blockquote className="blockquote">
                    <p> {content.description} </p>
                </blockquote>
                </figure> 
            </div>
            <div className={styles.houseFeaturesContainer}>
            <h3 className="text-center" id="features">
                Features
                </h3>
                    <dl className ={styles.infoList}>
                        <div className = {styles.item}>
                        <dt className = {styles.dt}>Asking price</dt>
                    <dd className = {styles.dd}> {content.asking_price} &euro; </dd>
                        </div>
                        <div className = {styles.item}>
                        <dt className = {styles.dt}>Status</dt>
                    <dd className = {styles.dd}>Available</dd>
                        </div>
                        <div className = {styles.item}>
                        <dt className = {styles.dt}>Gross Area</dt>
                    <dd className = {styles.dd}>{content.gross_area}</dd>
                        </div>

                        <div className = {styles.item}>
                        <dt className = {styles.dt}>Private Gross Area</dt>
                    <dd className = {styles.dd}>{content.private_gross_area}</dd>
                        </div>
                        <div className = {styles.item}>
                        <dt className = {styles.dt}>Living Area</dt>
                    <dd className = {styles.dd}>{content.living_area}</dd>
                        </div>
                        <div className = {styles.item}>
                        <dt className = {styles.dt}>Construction Year</dt>
                    <dd className = {styles.dd}>{content.construction_year}</dd>
                        </div>
                        <div className = {styles.item}>
                        <dt className = {styles.dt}>Bedrooms</dt>
                    <dd className = {styles.dd}>{content.bedrooms}</dd>
                        </div>
                        <div className = {styles.item}>
                        <dt className = {styles.dt}>Bathrooms</dt>
                    <dd className = {styles.dd}>{content.bathrooms}</dd>
                        </div>
                    </dl>
            </div>
            <div className={styles.housePhotosContainer}>
                <h3 className="text-center" id="photos">
                Photos
                </h3>
                    <div className={styles.housePhotosDiv}>
                        {content.images.map((src, index) =>(
                            <div className="col-6 col-md-4 col-lg-3 foto" key = {index}>
                        <a href={src} target="_blank" className="luminous" title= {`House Photo - ${index}`}>
                            <img src = {src} alt= {`House Photo - ${index}`} loading="lazy" />
                        </a>
                    </div>
                        ))}
                    
                    </div>
                </div>
                <div className={styles.houseContactFormContainer} id="contact">
                <h3 className="text-center" id="more-information">
                                Contact Form
                                </h3>

                                <form method="POST" action="https://www.remax.nl/property/reitzstraat-212-den-haag-1880/send" acceptCharset="UTF-8" id="frmProperty" role="form">
  <div className={styles.formColumns}>
    
    <div className= {styles.formColumn}>
      <label htmlFor="name">Name *</label>
      <div className= {styles.formGroup}>
        <input className= {styles.formControl} id="naam" name="naam" type="text" required />
      </div>

      <label htmlFor="email">Email address *</label>
      <div className= {styles.formGroup}>
        <input className= {styles.formControl} id="email" name="email" type="email" required />
      </div>

      <label htmlFor="phone">Phone number *</label>
      <div className= {styles.formGroup}>
        <input className= {styles.formControl} id="telefoon" name="telefoon" type="text" required />
      </div>
    </div>

    
    <div className= {styles.formColumn}>
      <label htmlFor="bericht">Your message *</label>
      <div className= {`${styles.formGroup} ${styles.fullHeight}`}>
        <textarea className= {`${styles.formControl} ${styles.fullHeight}`} id="bericht" name="bericht" rows={10} required></textarea>
      </div>
    </div>
  </div>

 
  <div className= {styles.formFooter}>
    <div className= {styles.consent}>
      <input required name="avg-check" type="checkbox" id="avgCheck" value="1" />
      <label htmlFor="avgCheck">
        I hereby give REMAX permission to use my data to process this contact request and to contact me about this. *
      </label>
    </div>
    <button type="submit" className= {styles.submitButton}>
      <span>Send</span> <i className="icon-arrow-right"></i>
    </button>
  </div>
</form>
                        
                </div>
    </>
    
  )
};

export default Page;
