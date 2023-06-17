import { axiosInstance, config } from './../config'

export const createPassenger = (passenger) => {
    const request = axiosInstance.post(`${config.env.microservice.API_BASE_DRIVAN}/Passageiro`, passenger)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getPassengerById = (passengerId) => {
    const request = axiosInstance.get(`${config.env.microservice.API_BASE_DRIVAN}/Passageiro/${passengerId}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}
