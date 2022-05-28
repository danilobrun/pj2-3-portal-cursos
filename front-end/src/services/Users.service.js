import { apiUrl } from "./Api.service"

export const login = async (credentialsData) => {
    const body = JSON.stringify(credentialsData)
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body,
        headers: {
            'content-type': 'application/json'
        }
    })
    if (!response.ok) {
        const data = await response.json()
        const message = data === 'Incorrect password'
            ? 'Credentials invalid.'
            : 'Reponse not ok.'
        throw new Error(message)
    }

} 