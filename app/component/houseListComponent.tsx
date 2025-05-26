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
  {[
    {
      jpg: "/images/house-t4-for-sale-benavente-1.png",
      webp: "/images/webp/house-t4-for-sale-benavente-1.webp",
      avif: "/images/avif/house-t4-for-sale-benavente-1.avif",
      alt: "Front view of T4 house in Benavente"
    },
    {
      jpg: "/images/house-t4-for-sale-benavente-2.png",
      webp: "/images/webp/house-t4-for-sale-benavente-2.webp",
      avif: "/images/avif/house-t4-for-sale-benavente-2.avif",
      alt: "Living room of T4 house in Benavente"
    },
    {
      jpg: "/images/house-t4-for-sale-benavente-3.png",
      webp: "/images/webp/house-t4-for-sale-bairro-auto-3.webp",
      avif: "/images/avif/house-t4-for-sale-bairro-auto-3.avif",
      alt: "Kitchen area of T4 house in Benavente"
    },
    {
      jpg: "/images/house-t4-for-sale-benavente-4.jpg",
      webp: "/images/house-t4-for-sale-bairro-auto-4.webp",
      avif: "/images/house-t4-for-sale-bairro-auto-4.avif",
      alt: "Backyard of T4 house in Benavente"
    }
  ].map((img, idx) => (
    <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
      <picture>
        <source srcSet={img.avif} type="images/avif" />
        <source srcSet={img.webp} type="images/webp" />
        <img
          src={img.jpg}
          loading="lazy"
          decoding="async"
          className="d-block w-100"
          alt={img.alt}
          width="1280"
          height="720"
          style={{
            aspectRatio: "16/9",
            width: "100%",
            objectFit: "cover"
          }}
        />
      </picture>
    </div>
  ))}
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
        <img src="/images/surface.png" style={{width: '100%'}} alt="House Area Icon"  />
        </div>
      <div>
        <span>351</span> m&sup2;
      </div>
      </div>
      <div style={{width: '30%',display: 'flex',justifyContent:'center' }}>
        <div>
        <img src="/images/bed.png" style={{width: '20px'}} alt="House Bed Icon"  />
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
  {[
    {
      jpg: "/images/house-t4-for-sale-bairro-auto-1.jpg",
      webp: "/images/house-t4-for-sale-bairro-auto-1.webp",
      avif: "/images/house-t4-for-sale-bairro-auto-1.avif",
      alt: "Front view of T4 house in Bairro Auto"
    },
    {
      jpg: "/images/house-t4-for-sale-bairro-auto-2.jpg",
      webp: "/images/webp/house-t4-for-sale-bairro-auto-2.webp",
      avif: "/images/avif/house-t4-for-sale-bairro-auto-2.avif",
      alt: "Living room of T4 house in Bairro Auto"
    },
    {
      jpg: "/images/house-t4-for-sale-bairro-auto-3.jpg",
      webp: "/images/webp/house-t4-for-sale-bairro-auto-3.webp",
      avif: "/images/avif/house-t4-for-sale-bairro-auto-3.avif",
      alt: "Kitchen area of T4 house in Bairro Auto"
    },
    {
      jpg: "/images/house-t4-for-sale-bairro-auto-4.jpg",
      webp: "/images/webp/house-t4-for-sale-bairro-auto-4.webp",
      avif: "/images/avif/house-t4-for-sale-bairro-auto-4.avif",
      alt: "Backyard of T4 house in Bairro Auto"
    }
  ].map((img, idx) => (
    <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
      <picture>
        <source srcSet={img.avif} type="images/avif" />
        <source srcSet={img.webp} type="images/webp" />
        <img
          src={img.jpg}
          loading="lazy"
          decoding="async"
          className="d-block w-100"
          alt={img.alt}
          width="1280"
          height="720"
          style={{
            aspectRatio: "16/9",
            width: "100%",
            objectFit: "cover"
          }}
        />
      </picture>
    </div>
  ))}
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
  {[
    {
      jpg: "/images/house-t4-for-sale-leceia-1.jpg",
      webp: "/images/house-t4-for-sale-leceia-1.webp",
      avif: "/images/house-t4-for-sale-leceia-1.avif",
      alt: "Front view of T4 house in Leceia"
    },
    {
      jpg: "/images/house-t4-for-sale-leceia-2.jpg",
      webp: "/images/webp/house-t4-for-sale-leceia-2.webp",
      avif: "/images/avif/house-t4-for-sale-leceia-2.avif",
      alt: "Living room of T4 house in Leceia"
    },
    {
      jpg: "/images/house-t4-for-sale-leceia-3.jpg",
      webp: "/images/webp/house-t4-for-sale-leceia-3.webp",
      avif: "/images/avif/house-t4-for-sale-leceia-3.avif",
      alt: "Kitchen area of T4 house in Leceia"
    },
    {
      jpg: "/images/house-t4-for-sale-leceia-4.jpg",
      webp: "/images/webp/house-t4-for-sale-leceia-4.webp",
      avif: "/images/avif/house-t4-for-sale-leceia-4.avif",
      alt: "Backyard of T4 house in Leceia"
    }
  ].map((img, idx) => (
    <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
      <picture>
        <source srcSet={img.avif} type="images/avif" />
        <source srcSet={img.webp} type="images/webp" />
        <img
          src={img.jpg}
          loading="lazy"
          decoding="async"
          className="d-block w-100"
          alt={img.alt}
          width="1280"
          height="720"
          style={{
            aspectRatio: "16/9",
            width: "100%",
            objectFit: "cover"
          }}
        />
      </picture>
    </div>
  ))}
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
  {[
    {
      jpg: "/images/apartment-t3-cascais-1.jpg",
      webp: "/images/apartment-t3-cascais-1.webp",
      avif: "/images/apartment-t3-cascais-1.avif",
      alt: "Front view of T4 house in Cascais"
    },
    {
      jpg: "/images/apartment-t3-cascais-2.jpg",
      webp: "/images/webp/apartment-t3-cascais-2.webp",
      avif: "/images/avif/apartment-t3-cascais-2.avif",
      alt: "Living room of T4 house in Cascais"
    },
    {
      jpg: "/images/apartment-t3-cascais-3.jpg",
      webp: "/images/webp/apartment-t3-cascais-3.webp",
      avif: "/images/avif/apartment-t3-cascais-3.avif",
      alt: "Kitchen area of T4 house in Cascais"
    },
    {
      jpg: "/images/apartment-t3-cascais-4.jpg",
      webp: "/images/webp/apartment-t3-cascais-4.webp",
      avif: "/images/avif/apartment-t3-cascais-4.avif",
      alt: "Backyard of T4 house in Cascais"
    }
  ].map((img, idx) => (
    <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
      <picture>
        <source srcSet={img.avif} type="images/avif" />
        <source srcSet={img.webp} type="images/webp" />
        <img
          src={img.jpg}
          loading="lazy"
          decoding="async"
          className="d-block w-100"
          alt={img.alt}
          width="1280"
          height="720"
          style={{
            aspectRatio: "16/9",
            width: "100%",
            objectFit: "cover"
          }}
        />
      </picture>
    </div>
  ))}
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
  {[
    {
      jpg: "/images/apartment-t2-ajuda-1.jpg",
      webp: "/images/apartment-t2-ajuda-1.webp",
      avif: "/images/apartment-t2-ajuda-1.avif",
      alt: "Front view of Apartment in Ajuda"
    },
    {
      jpg: "/images/apartment-t2-ajuda-2.jpg",
      webp: "/images/webp/apartment-t2-ajuda-2.webp",
      avif: "/images/avif/apartment-t2-ajuda-2.avif",
      alt: "Living room of Apartment in Ajuda"
    },
    {
      jpg: "/images/apartment-t2-ajuda-3.jpg",
      webp: "/images/webp/apartment-t2-ajuda-3.webp",
      avif: "/images/avif/apartment-t2-ajuda-3.avif",
      alt: "Kitchen area of Apartment in Ajuda"
    },
    {
      jpg: "/images/apartment-t2-ajuda-4.jpg",
      webp: "/images/webp/apartment-t2-ajuda-4.webp",
      avif: "/images/avif/apartment-t2-ajuda-4.avif",
      alt: "Backyard of Apartment in Ajuda"
    }
  ].map((img, idx) => (
    <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
      <picture>
        <source srcSet={img.avif} type="images/avif" />
        <source srcSet={img.webp} type="images/webp" />
        <img
          src={img.jpg}
          loading="lazy"
          decoding="async"
          className="d-block w-100"
          alt={img.alt}
          width="1280"
          height="720"
          style={{
            aspectRatio: "16/9",
            width: "100%",
            objectFit: "cover"
          }}
        />
      </picture>
    </div>
  ))}
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
  {[
    {
      jpg: "/images/house-t7-oeiras-1.jpg",
      webp: "/images/house-t7-oeiras-1.webp",
      avif: "/images/house-t7-oeiras-1.avif",
      alt: "Front view of House T7 in Oeiras"
    },
    {
      jpg: "/images/house-t7-oeiras-2.jpg",
      webp: "/images/webp/house-t7-oeiras-2.webp",
      avif: "/images/avif/house-t7-oeiras-2.avif",
      alt: "Living room of House T7 in Oeiras"
    },
    {
      jpg: "/images/house-t7-oeiras-3.jpg",
      webp: "/images/webp/house-t7-oeiras-3.webp",
      avif: "/images/avif/house-t7-oeiras-3.avif",
      alt: "Kitchen area of House T7 in Oeiras"
    },
    {
      jpg: "/images/house-t7-oeiras-4.jpg",
      webp: "/images/webp/house-t7-oeiras-4.webp",
      avif: "/images/avif/house-t7-oeiras-4.avif",
      alt: "Backyard of House T7 in Oeiras"
    }
  ].map((img, idx) => (
    <div className={`carousel-item ${idx === 0 ? "active" : ""}`} key={idx}>
      <picture>
        <source srcSet={img.avif} type="images/avif" />
        <source srcSet={img.webp} type="images/webp" />
        <img
          src={img.jpg}
          loading="lazy"
          decoding="async"
          className="d-block w-100"
          alt={img.alt}
          width="1280"
          height="720"
          style={{
            aspectRatio: "16/9",
            width: "100%",
            objectFit: "cover"
          }}
        />
      </picture>
    </div>
  ))}
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