import { Button, Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import Banner from '../../assets/img/banner.jpg'

export function HomeView () {
    return (
      <Layout>
        <Container>
          <div className='shadow border p-4 p-md-5 my-3 banner-home d-md-flex aling-items-center'>
            <div>
              <h1>Bem vindo(a) a Cifra Engenharia</h1>
              <p>Conheça nossos portais internos.</p>
              <p>Acesse nossos sistemas agora mesmo.</p>
              <Button className='text-uppercase'>Acessar</Button>
            </div>
            <div>
              <img src={Banner} alt='Cifra Engenharia Sistemas' width={626} height={391} className='img-fluid'></img>
            </div>
          </div>
        </Container>
      </ Layout>
    )
  }