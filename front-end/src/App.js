import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import Logo from './assets/img/logo-infnet.png'
import Banner from './assets/img/banner.jpg'
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
    <footer className='bg-dark bg-gradient text-white py-2 mt-4 footer'>
      <p className='m-0'>Todos os direitos reservados a Cifra Engenharia.</p>
    </footer>
  )
}

function HomeView () {
  return (
    <>
      <Header />
      <main>
        <Container>
          <div className='shadow border p-4 my-3 banner-home'>
            <h1>Bem vindo(a) a Cifra Engenharia</h1>
            <p>Conheça nossos portais internos.</p>
            <p>Acesse nossos sistemas agora mesmo.</p>
            <Button className='text-uppercase'>Acessar</Button>
            <img src={Banner} alt='Cifra Engenharia Sistemas' width={626} height={391} className='img-fluid'></img>
          </div>
        </Container>
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
