
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css';
// bg-body-tertiary
import logo from './imgs/logo.png';
function Navbars(){
    return(
        <>
    <Navbar fixed='top' expand="lg" className="shadow-sm p-3 mb-5 bg-body rounded nav ">
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} className='img-fluid img-nav'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='li-nav fw-bold'>Home</Nav.Link>
            <Nav.Link href="#link"className='li-nav fw-bold'>About us</Nav.Link>
            <Nav.Link href="#link" className='li-nav fw-bold'>Explore Foods</Nav.Link>
            <Nav.Link href="#link" className='li-nav fw-bold'>Reviews</Nav.Link>
            <Nav.Link href="#link" className='li-nav fw-bold me-3'>FAQ</Nav.Link>
            <Navbar.Brand href="#" className='btn btn-danger text-light number-nav fw-400' >1800 789 123</Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    );
}
export default Navbars;