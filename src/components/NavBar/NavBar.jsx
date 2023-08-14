import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import logo from '../../imagenes/logomotoChico.jpg';
import '../../estilos/NavBar.css';
import {NavLink, Link} from 'react-router-dom'


function NavBar() {
  return (
    <>
<Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Link to='/'>
          <Navbar.Brand href="#home"><img src={logo} alt="logomoto" className='logomoto'/></Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <NavLink to={`/category/Casco`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Cascos </NavLink>
            <NavLink to={`/category/Camperas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Camperas </NavLink>
            <NavLink to={`/category/Guantes`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}> Guantes </NavLink>
          </Nav>
        </Container>
        <CartWidget/>
      </Navbar>

    </>
  );
}

export default NavBar;