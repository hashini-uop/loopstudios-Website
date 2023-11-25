import React from 'react'
import { Row , Container , Col, Nav} from 'react-bootstrap';
function Footer() {
    return (
        <div>
            <footer className="footer">
                
                    <Row className="footer-top">
                        <Col xs={6}>
                            <p className="footer-company">loopstudios</p>
                        </Col>
                        <Col xs={3} lg={2} className="text-right">
                            <i class="fa-brands fa-facebook" style={{paddingRight:"10px"}}></i>
                            <i className="fab fa-twitter" style={{paddingRight:"10px"}}></i>
                            <i class="fa-brands fa-pinterest" style={{paddingRight:"10px"}}></i>
                            <i className="fab fa-instagram" style={{paddingRight:"10px"}}></i>
                        </Col>
                    </Row>
                    <Row className="footer-bottom">
                        <Col xs={2} lg={5}>
                            <Nav className="flex-row">
                                <Nav.Link href="#about" style={{color:"white"}}>About</Nav.Link>
                                <Nav.Link href="#careers" style={{color:"white"}}>Careers</Nav.Link>
                                <Nav.Link href="#careers" style={{color:"white"}}>Events</Nav.Link>
                                <Nav.Link href="#careers" style={{color:"white"}}>Products</Nav.Link>
                                <Nav.Link href="#support" style={{color:"white"}}>Support</Nav.Link>
                                
                            </Nav>
                        </Col>
                        <Col xs={6} className="text-right">
                            <p  className="footer-message">@2022 | loopstudios. All rights reserved</p>
                        </Col>
                    </Row>
                
            </footer>
        </div>
    );
};

export default Footer;

