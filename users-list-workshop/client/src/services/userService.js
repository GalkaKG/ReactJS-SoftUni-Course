const baseUrl = 'http://localhost:3030/jsonstore'

export const getAll = async () => {
    const response = await fetch(`${baseUrl}/users`)
    const result = await response.json();
    
    return Object.values(result);
}


// export const getOne = async (userId) => {
//     const response = await fetch(`${baseUrl}/users/${userId}`);
//     const result = await response.json();

//     return result;
// }

export const getOne = async (userId) => {
    try {
      if (userId == null) {
        return
      }
      const response = await fetch(`${baseUrl}/users/${userId}`);
      const result = await response.json();
  
      // Ensure that the user object has an address property
      const userWithAddress = {
        ...result,
        address: result.address || {} // Default to an empty object if address is not present
      };
  
      return userWithAddress;
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error; // Rethrow the error to handle it at the component level if needed
    }
  }
  
export const create = async (userData) => {
    const response = await fetch(baseUrl + '\\users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userData)
    });

    if (response.ok) {
      const result = await response.json();

      return result;
    } else {
      throw {message : 'Unable to create user'};
    }

    
}