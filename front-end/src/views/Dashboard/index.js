import { Alert } from "react-bootstrap";
import { LayoutPortal } from "../../components/LayoutPortal";

export function DashboardView () {
    return (
        <LayoutPortal>
            <h1 className="mt-4">Bem vindo(a) Danilo!</h1>
            <p>Utilize o menu para gerenciar os dados do site.</p>
            <Alert variant="info">Você receberá as intruções das solicitações aos portais por e-mail.</Alert>
        </LayoutPortal>
    )
}
