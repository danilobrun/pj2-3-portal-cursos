import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo from './assets/img/logo-infnet.png'

function Header () {
  return (
    <header>
      <Navbar bg='dark bg-gradient' expand='md' className='main-navbar'>
        <Container>
          <Navbar.Brand href='/'>
             <img src={Logo} alt='Instituto Infnet' width={181} height={50} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar-header' />
          <Navbar.Collapse id='navbar-header'>
            <Nav>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/cursos'>Cursos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </header>
  )
}

function HomeView () {
  return (
    <>
      <Header />
      <p>Conteúdo</p>
      <p>Rodapé</p>
    </>
  )
}
function App() {
  return (
   <HomeView />
  );
}

export default App;
