
 import Carousel from 'react-bootstrap/Carousel';
import CarListe from './NosCar/CarListe';
import Card from 'react-bootstrap/Card';

function Home() {
  return (
    <div className='caroussel'  >
    <Carousel>
      <Carousel.Item >
        <img
          className="d-block w-100"
          src="https://avantgarde.tn/static/upload/2d0cbdc20c6213eb727f35bfb7e962cd.jpeg"
          alt="404"
        />
      
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          
          src="https://jouadricar-fes.com/wp-content/uploads/2019/04/location-voiture-neuve.png" style={{width:"1350px",height:"1350"}}
          alt=""
          
        />
  
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.observatoiredelafranchise.fr/images/megaMedia/enseignes/127/header-rentacar.jpg" 
          alt=""
        />
        
        <Carousel.Caption>
        
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel>


      
  <div style={{display:'flex',flexwrap:'wrap'}}   className='rent'>
<div className='home text'>
<div className='contenairehome'>
     <h4 style={{color:'red'}}> Rent a Car  </h4>
     </div>
   <div className='rowhome'> 
<p>La société Rent a car vous offre des voitures neuves, propres et bien maintenues, vidange gratuit, nous mettons à votre disposition une gamme de voitures neuves et diversifiées ainsi que des voitures de haute gamme : Hyundai,  Ford, Peugeot 308, des voitures de 5 places,  et grands bus pour des prix raisonnables.</p>
</div>
</div> 

<div className='vaccance'>
         <h4 style={{color:'blueviolet'}}>Location de véhicules pour vacances</h4>
<p>Vous partez en vacances quelque part en Tunisie ? rent a car fais de vos vacances des moments inoubliables.
Réservez et payez en ligne votre voiture de location pour vos vacances.  Nous mettons à votre disposition des solutions adaptées à vos besoins pour vos déplacements et excursions en Tunisie.</p>
<img  style={{width:"120px",heigth:"120px", justifyContent:"center"}} src='https://previews.123rf.com/images/talex/talex1603/talex160300084/54418493-autonoleggio-concetto-per-poster-sito-web-pubblicit%C3%A0-come-la-mano-automobile-e-tasto-.jpg' alt='logo'/>
</div>
</div>

<div  className='all' >
<h1  className='titre' > NOTRE AGENCE LOCTAION DE VOITURE EN TUNISIE FAIT LA DIFFERENCE</h1>
<div style={{display:"flex",flexWrap:'wrap',justifyContent:"space-around"}} className='service'>
<Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://img-4.linternaute.com/nLWOhw6u_zri3frSWDBn12hbuoU=/1500x/smart/9b2ed91c1d51484bb70aedd2d34040e2/ccmcms-linternaute/10786128.jpg" />
<Card.Body>
  <Card.Title><strong>Location voiture avec GPS</strong></Card.Title>
  <Card.Text>
  Afin de trouver votre chemin et de gagner du temps, <span style={{color:'red'}}>5dt /jour</span>
  </Card.Text>
  </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://blog.mycarsit.com/wp-content/uploads/2019/05/siege-auto-enfant-plus-3-ans.jpg" />
<Card.Body>
  <Card.Title> <strong>Location voiture avec siege bebe</strong></Card.Title>
  <Card.Text>
 Donnes  plus de sécurité  à vos enfants <div style={{color:'red'}}>GRTUIT</div>
  </Card.Text>
  </Card.Body>
    </Card>

    <Card style={{ width: '18rem' }}>
<Card.Img variant="top" src="https://photo.loisirent.com/images/bannier2.jpg" />
<Card.Body>
  <Card.Title><strong>Location voiture avec chauffeur</strong></Card.Title>
  <Card.Text>
  Location voiture avec chauffeur disposition  <span style={{color:'red'}}>15 dt/jour</span>
  </Card.Text>
  </Card.Body>
    </Card>
    </div>
<div style={{displyer:'flex',flexwrap:'wrap'}} className='voyage'>
<div className='icone'>
<div className='icone-container'>
<h1  style={{color:'red'}}  className='aaa'>Une icône de la location voiture Tunisie !</h1>

<p> Rent a car Tunisie garantit à sa chère clientèle des voitures de locations récentes, propres et bien entretenues à des prix de locations voitures pas chers.<br/> rentacar Tunisie est une agence assurant un service sérieux et de qualité </p>
<div  className='bagage'>
<img src='https://www.europcar.fr/editorial/europcar-content/uploads/sites/5/2022/03/istock-680393248-1-copie.jpg'/>
</div>
</div>
</div>

</div>

</div>
</div>












  );
}



export default Home;
    
   