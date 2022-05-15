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
            <Nav className='ms-auto'>
              <Nav.Link href='/'>Home</Nav.Link>
              <Nav.Link href='/cursos'>Cursos</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
    </header>
  )
}

function Footer () {
  return (
    <footer className='footer bg-dark bg-gradient text-white py-2 mt-4'>
      <p className='m-0'>Todos os direitos reservados a Cifra Engenharia.</p>
    </footer>
  )
}

function HomeView () {
  return (
    <>
      <Header />
      <main>
        <p>Conteúdo</p>
      </main>
      <Footer />
    </>
  )
}

function App() {
  return (
   <HomeView />
  );
}

export default App;
