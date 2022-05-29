import { apiUrl } from "./Api.service"
import { setStorageItem } from "./Storage.service"

export const login = async (credentialsData) => {
    const body = JSON.stringify(credentialsData)
    const response = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        body,
        headers: {
            'content-type': 'application/json'
        }
    })
    const data = await response.json()
    if (!response.ok) {
        const message = data === 'Incorrect password'
            ? 'Credentials invalid.'
            : 'Reponse not ok.'
        throw new Error(message)
    }
    const userData = {
        accessToken: data.accessToken,
        ...data.user
    }
    setStorageItem('user', JSON.stringify(userData))

} 