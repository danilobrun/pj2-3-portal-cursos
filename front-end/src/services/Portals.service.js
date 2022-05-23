export const getPortals = async () => {
    const response = await fetch(`http://localhost:3001/portals`)
            if (!response.ok) {
                throw new Error('Reponse not ok.')
            }
            return response.json()
}
export const getPortalById = async (portalId) => {
    const response = await fetch(`http://localhost:3001/portals/${portalId}?_embed=inscriptions`)
            if (!response.ok) {
                throw new Error('Reponse not ok.')
            }
            return response.json()
}