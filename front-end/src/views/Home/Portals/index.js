import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../../components/Layout";
import { CardPortals } from "../../../components/CardPortals";

const portals = [
    {
        id: 1,
        name: 'Metabase',
        shortDescription: 'Dashboards atualizadas, e em relatórios e gráficos',
        image: '/assets/img/produtos/corinthias-tshirt.jpeg',  
    },
    {
        id: 2,
        name: 'Giscomp',
        shortDescription: 'Dashboards atualizadas, e em relatórios e gráficos',
        image: '/assets/img/produtos/corinthias-tshirt.jpeg',  
    },
    {
        id: 3,
        name: 'GSAN',
        shortDescription: 'Dashboards atualizadas, e em relatórios e gráficos',
        image: '/assets/img/produtos/corinthias-tshirt.jpeg',  
    },
    {
        id: 4,
        name: 'Sisper',
        shortDescription: 'Dashboards atualizadas, e em relatórios e gráficos',
        image: '/assets/img/produtos/corinthias-tshirt.jpeg',  
    },
    {
        id: 5,
        name: 'Chamados TI',
        shortDescription: 'Dashboards atualizadas, e em relatórios e gráficos',
        image: '/assets/img/produtos/corinthias-tshirt.jpeg',  
    },
    {
        id: 6,
        name: 'RH',
        shortDescription: 'Dashboards atualizadas, e em relatórios e gráficos kkkkkkkkkkkkkkkkkkkkk',
        image: '/assets/img/produtos/corinthias-tshirt.jpeg',  
    }
]

export function PortalsView () {
    return (
        <Layout>
            <Container>
                <h1 className='text-center mt-4'>Portais</h1>
                <Row>
                   {portals.map(portal => (
                        <Col key={portal.id} className='mb-4' xs={6} md={4} lg={3}>
                            <CardPortals portal={portal} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </Layout>
    )
}