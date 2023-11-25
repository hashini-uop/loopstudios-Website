import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="transparent" expand="lg">
        <Navbar.Brand href="#home" style={{color:"white" , fontSize:"35px"}}>loopstudios</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ml-auto ">
            <Nav.Link href="#about" style={{color:"white"}}>About</Nav.Link>
            <Nav.Link href="#careers" style={{color:"white"}}>Carrers</Nav.Link>
            <Nav.Link href="#careers" style={{color:"white"}}>Event</Nav.Link>
            <Nav.Link href="#careers" style={{color:"white"}}>Product</Nav.Link>
            <Nav.Link href="#support" style={{color:"white"}}>Support</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </>
  );
}

export default NavBar;
