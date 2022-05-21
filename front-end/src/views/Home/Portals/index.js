import { Col, Container, Row } from "react-bootstrap";
import { Layout } from "../../../components/Layout";
import { CardPortals } from "../../../components/CardPortals";
import { useEffect, useState } from "react";
import { Loading } from "../../../components/Loading";

export function PortalsView () {
    const [portals, setPortals] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:3001/portals')
            .then((response) => response.json())
            .then((data) => {
                setPortals(data)
                setLoading(false)
            })
            
    }, [])
    return (
        <Layout>
            <Container>
                <h1 className='text-center mt-4'>Portais</h1>
                {loading && (
                    <Loading />
                )}
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