import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-infnet.png'

export function Header () {
    return (
      <header>
        <Navbar bg='dark bg-gradient' expand='md' className='main-navbar'>
          <Container>
            <Navbar.Brand as={Link} to='/'>
               <img src={Logo} alt='Instituto Infnet' width={181} height={50} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-header' />
            <Navbar.Collapse id='navbar-header'>
              <Nav className='ms-auto'>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/cursos'>Cursos</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
      </header>
    )
  }