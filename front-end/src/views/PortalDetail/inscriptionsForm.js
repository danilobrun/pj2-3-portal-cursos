import { useState } from "react"
import { Button, Form } from "react-bootstrap"

export function InscriptionsForm () {
    const [formData, setFormData] = useState({
        userName: '',
        userEmail: ''
    })
    return (
        <>
            <h2>Formulário de inscrição</h2>
            <Form>
                <Form.Group controlId="inscriptions-name" className="mb-3">
                    <Form.Label className="m-0">Nome</Form.Label>
                    <Form.Control
                        placeholder="Informe seu nome"
                        value={formData.userName}
                        onChange={event => setFormData({
                            ...formData,
                            userName: event.target.value
                        })}
                     />
                </Form.Group>
                <Form.Group controlId="inscriptions-email" className="mb-3">
                    <Form.Label className="m-0">E-mail</Form.Label>
                    <Form.Control
                        placeholder="exemplo@exemplo.com"
                        value={formData.userEmail}
                        onChange={event => setFormData({
                            ...formData,
                            userEmail: event.target.value
                        })}
                     />
                </Form.Group>
                <Button type="submit">Inscrever</Button>
            </Form>
        </>
    )
}