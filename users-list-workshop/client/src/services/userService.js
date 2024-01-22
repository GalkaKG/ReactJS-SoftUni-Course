const baseUrl = 'http://localhost:3030/jsonstore'

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/users`)
    const result = await response.json();
    
    return Object.values(result);
}