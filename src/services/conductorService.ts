import api from './api';

const createConductor = async (conductor) => {
    const responseResult = api.post('/conductor', conductor)
        .then((response) => {
            return response;
        })
        .catch((err) => {
            console.log('ERROR - createConductor - ', JSON.stringify(err));
        })

    return responseResult;
}

module.exports = {
    createConductor
};