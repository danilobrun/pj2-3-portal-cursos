import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo-cifra.png'

export function Header () {
    return (
      <header>
        <Navbar bg='secondary bg-gradient' variant="light" expand='md' className='main-navbar'>
          <Container>
            <Navbar.Brand as={Link} to='/'>
               <img src={Logo} alt='Instituto Infnet' width={181} height={50} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='navbar-header' />
            <Navbar.Collapse id='navbar-header'>
              <Nav className='ms-auto'>
                <Nav.Link as={Link} to='/'>Home</Nav.Link>
                <Nav.Link as={Link} to='/portals'>Portais</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar> 
      </header>
    )
  }