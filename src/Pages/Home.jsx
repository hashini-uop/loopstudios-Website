import React from 'react'
import NavBar from '../Components/NavBar'
import { Col, Container, Row, Button } from 'react-bootstrap';
import Footer from '../Components/Footer';


export default function () {
  return (
    <div>
      <header className="App-header">
        <div className='image-container'>

          <img src='Images/desktop/image-hero.jpg' alt='header-img' />
          <div className='container'>
            <div className='navbar'><NavBar /></div>
          </div>

          <div className='quote-container'>
            <div className='quote-box' >
              <p>IMMERSIVE EXPERIENCES THAT DELIVER</p>
            </div>
          </div>

        </div>
      </header>
      
      <main className="main-content ">
      <Row>
        <Col xs={2} lg={6}>
        <div className="main-image-container">
          <img src='Images/desktop/image-interactive.jpg' alt='interactive' className="main-image" />
          </div>
          </Col>
          <Col>
          <div className="image-text">
            <h1 style={{fontSize:"50px", fontFamily:"monospace"}}>THE LEADER IN INTERACTIVE VR</h1>
            <h6 style={{color:"grey" , fontFamily:"monospace" , textAlign:"justify"}}>Founded in 2011, Loopstudios has been producing world-class virtual
              reality projects for some of the best components around the globe. Our award-winning creations
              have transformed businesses through digital experiences that bind to their brand.
            </h6>

        </div>
        </Col>
        </Row>

        {/* 2nd part of the body */}

        <div className="creations-section">
          <Row className="justify-content-front">
            <Col xs={10}  >
              <h2 className="creations-title" style={{fontSize:"50px", fontFamily:"monospace"}}>OUR CREATIONS</h2>
            </Col>
            <Col xs="auto" >
              <Button variant="light" className='btn btn-outline-dark' style={{borderRadius:"0"}}>SEE ALL</Button>
              
            </Col>
          </Row>
          <Row className="creations-grid">
            <Col md={3}>
              <div className="creation-item">
                <img src="Images/desktop/image-deep-earth.jpg" alt="Creation 1" />
                <p className="creation-name">DEEP <br/> EARTH</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="creation-item">
                <img src="Images/desktop/image-night-arcade.jpg" alt="Creation 2" />
                <p className="creation-name">NIGHT <br/> ARCADE</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="creation-item">
                <img src="Images/desktop/image-soccer-team.jpg" alt="Creation 2" />
                <p className="creation-name">SOCCER <br/>TEAM VR</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="creation-item">
                <img src="Images/desktop/image-grid.jpg" alt="Creation 2" />
                <p className="creation-name">THE <br/> GRID</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="creation-item">
                <img src="Images/desktop/image-from-above.jpg" alt="Creation 2" />
                <p className="creation-name">FROM UP <br/> ABOVE VR</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="creation-item">
                <img src="Images/desktop/image-pocket-borealis.jpg" alt="Creation 2" />
                <p className="creation-name">POCKET <br/> BOREALIS</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="creation-item">
                <img src="Images/desktop/image-curiosity.jpg" alt="Creation 2" />
                <p className="creation-name">THE <br/> CURIOSITY</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="creation-item">
                <img src="Images/desktop/image-fisheye.jpg" alt="Creation 2" />
                <p className="creation-name">MAKE IT <br/> FISHEYE</p>
              </div>
            </Col>
          </Row>
        </div>
      </main>

      


      <Footer />


    </div>
  );
};
