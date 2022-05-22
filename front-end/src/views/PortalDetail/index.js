import { useEffect, useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { Loading } from "../../components/Loading";
import { NotFoundView } from "../NotFound";
import { Inscriptions } from "./inscriptions";
import { InscriptionsForm } from "./inscriptionsForm";

export function PortalDetailView () {
    const { id } = useParams()
    const [portal, setPortal] = useState()
    const [loading, setLoading] = useState(true)
    const [errorMsg, setErrorMsg] = useState()
    useEffect(() => {
            const fetchPortal = async () => {
                try {
                    const response = await fetch(`http://localhost:3001/portals/${id}?_embed=inscriptions`)
                    if (!response.ok) {
                        throw new Error('Reponse not ok.')
                    }
                    const data = await response.json()
                    setPortal(data)
                    setLoading(false)
                } catch(err) {
                    const message = err.message === 'Reponse not ok.'
                    ? '404' : 'Falha ao buscar informações dos portais, por favor recarregue a página.'
                    setErrorMsg(message)
                    setLoading(false)
                }
           
        }
        fetchPortal()
    }, [id])
    if (loading) {
        return <Loading />
    }
    if (errorMsg === '404') {
        return <NotFoundView />       
    }
    return (
        <Layout>
            <Container>
                {errorMsg ? (
                    <Alert variant="danger" className="mt-3">{errorMsg}</Alert>
                ) : (
                    <>
                        <h1 className="text-center mt-4">{portal.name}</h1>
                        <p><strong>Responsáveis:</strong> {portal.responsible}</p>
                        <p>{portal.description}</p>
                        <Inscriptions inscriptions={portal.inscriptions} />
                        <InscriptionsForm />
                    </>
                )}
            </Container>
        </Layout>
    )
}