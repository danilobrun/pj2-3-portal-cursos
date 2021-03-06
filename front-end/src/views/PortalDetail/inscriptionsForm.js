import { useState } from "react"
import { Alert, Button, Form } from "react-bootstrap"

const initialFormData = {
    userName: '',
    userEmail: ''
}

export function InscriptionsForm ({ portalId, onRegister }) {
    const [showSuccess, setShowSuccess] = useState(false)
    const [isSubmiting, setIsSubmiting] = useState(false)
    const [errorMsg, setErrorMsg] = useState()
    const [formData, setFormData] = useState(initialFormData)
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setErrorMsg(undefined)
            setIsSubmiting(true)
            await fetch(`http://localhost:3001/inscriptions`, {
                method: 'POST',
                body: JSON.stringify({
                    name: formData.userName,
                    email: formData.userEmail,
                    portalId: parseInt(portalId)
                }),
                headers: {
                    'content-type': 'application/json'
                }
            })
            setShowSuccess(true)
            setFormData(initialFormData)
            onRegister()
        } catch (err) {
            console.log(err)
            setErrorMsg('Falha ao fazer inscrição. Tente novamente.')
        }
        setIsSubmiting(false)
    }
    return (
        <>
            <h2>Formulário de inscrição</h2>
            {showSuccess && (
                <Alert variant="success" dismissible onClose={() => setShowSuccess(false)}>Inscrito com sucesso</Alert>
            )}
            {errorMsg && (
                <Alert variant="danger">{errorMsg}</Alert>
            )}
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="inscriptions-name" className="mb-3">
                    <Form.Label className="m-0">Nome</Form.Label>
                    <Form.Control
                        placeholder="Informe seu nome"
                        value={formData.userName}
                        onChange={handleChange}
                        name="userName"
                        required
                     />
                </Form.Group>
                <Form.Group controlId="inscriptions-email" className="mb-3">
                    <Form.Label className="m-0">E-mail</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="exemplo@exemplo.com"
                        value={formData.userEmail}
                        onChange={handleChange}
                        name="userEmail"
                        required
                     />
                </Form.Group>
                <Button type="submit" disabled={isSubmiting}>Inscrever</Button>
            </Form>
        </>
    )
}