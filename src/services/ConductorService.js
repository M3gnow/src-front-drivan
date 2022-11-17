const axios = require('axios');

const urlBaseConductor = 'http://localhost:7209/conductor';

export async function getAllConductor() {
    const response = await axios.get(urlBaseConductor);

    return response.data;
}

export async function createConductor(conductor) {
    try {
        await axios.post(urlBaseConductor, conductor);
    } catch (error) {
        if (error.status && error.status === 500) {
            console.log('ERROR 500', error.message)    
        }

        if (error.status && error.status === 400) {
            console.log('ERROR 400', error.message)    
        }

        console.log('ERROR GENERIC', error.message)
    }
}