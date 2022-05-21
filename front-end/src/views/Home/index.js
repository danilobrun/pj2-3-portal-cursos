import { Button, Carousel, Container } from "react-bootstrap";
import { Layout } from "../../components/Layout";
import { Link } from "react-router-dom";
import Cadastramento from '../../assets/img/img-cadastramento-800x600.png'
import Georreferenciamento from '../../assets/img/img-georreferenciamento-800x600.png'
import Corte from '../../assets/img/img-corte-1-800x600.png'
import Religacao from '../../assets/img/img-religacao-800x600.png'

export function HomeView () {
    return (
      <Layout>
        <Container>
          <div className='shadow border p-4 p-md-5 my-3 banner-home d-md-flex aling-items-center'>
            <div className="mb-2">
              <h1>Bem vindo(a) a Cifra Engenharia</h1>
              <p>Conheça nossos portais internos.</p>
              <p>Acesse nossos sistemas agora mesmo.</p>
              <Button as={Link} to='/cursos' className='text-uppercase'>Acessar</Button>
            </div>
            <div>
              <Carousel>
                <Carousel.Item>
                  <img className="d-block w-100" src={ Cadastramento } alt="First slide"/>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={ Georreferenciamento } alt="First slide"/>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={ Corte } alt="First slide"/>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img className="d-block w-100" src={ Religacao } alt="First slide"/>
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                  </Carousel.Caption>
                </Carousel.Item> 
              </Carousel>
            </div>
          </div>
        </Container>
      </ Layout>
    )
  }