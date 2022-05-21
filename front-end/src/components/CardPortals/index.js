import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import LogoMebase from "../../assets/img/CardsLogo/logo-metabase.png"

export function CardPortals ({ portal }) {
    return (
        <Card className="text-center shadow h-100">
            <Card.Img variant="top" src={ LogoMebase } />
            <Card.Body className="d-flex flex-column align-items-center">
                <Card.Title as='h2' className='h5'>{portal.name}</Card.Title>
                <Card.Text>{portal.shortDescription}</Card.Text>
                <Button as={Link} to={`/portais/${portal.id}`} className='mt-auto'>Acessar</Button>
            </Card.Body>
        </Card>
    )
}