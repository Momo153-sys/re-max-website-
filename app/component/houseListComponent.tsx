'use client'

import React from 'react'
import styles from "../mainPage.module.css";
import { useRouter } from 'next/navigation';
const HouseListComponent = () => {
  const router = useRouter();
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) =>{
    const homesGrid = document.querySelector('.homeGridTrigger');
    const clickedCard = (event.target as HTMLElement).closest<HTMLDivElement>('.card');
    if (!homesGrid || !clickedCard || !homesGrid.contains(clickedCard)) return;


    const imageUrl = clickedCard.dataset.image;

    if (imageUrl) {
      sessionStorage.setItem('selectedImage', imageUrl);
      router.push('/view-house');
    }
  };
  


  return (
    <div className={`${styles.homesGrid} homeGridTrigger`}>
            <div className={styles.homeCard}>

<div className="card" data-image = "house-t4-for-sale-benavente" onClick={handleClick}>
  

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

<div className="card" data-image = "house-t4-for-sale-bairro-auto" onClick={handleClick}>
  

<div id="carouselExampleFade2" className="carousel slide carousel-fade">
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




<div className={styles.homeCard} >

<div className="card" data-image = "house-t4-for-sale-leceia" onClick={handleClick}>
  

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

<div className="card" data-image = "apartment-t3-cascais" onClick={handleClick}>
  

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

<div className="card" data-image = "apartment-t2-ajuda" onClick={handleClick}>
  

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

<div className="card" data-image = "house-t7-oeiras" onClick={handleClick}>
  

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
  )
}

export default HouseListComponent;