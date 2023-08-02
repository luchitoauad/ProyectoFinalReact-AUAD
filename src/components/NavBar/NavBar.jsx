import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../imagenes/logomotoChico.jpg';
import '../../estilos/NavBar.css';


function NavBar() {
  return (
    <>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><img src={logo} alt="logomoto" className='logomoto'/></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#cascos">Cascos</Nav.Link>
            <Nav.Link href="#camperas">Camperas</Nav.Link>
            <Nav.Link href="#guantes">Guantes</Nav.Link>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>

    </>
  );
}

export default NavBar;