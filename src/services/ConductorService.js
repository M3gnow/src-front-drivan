import { axiosInstance, config } from './../config'

export const getConductorById = (id) => {
    const request = axiosInstance.get(`${config.env.microservice.API_BASE_DRIVAN}/Condutor/${id}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const createConductor = (conductor) => {
    const request = axiosInstance.post(`${config.env.microservice.API_BASE_DRIVAN}/Condutor`, conductor)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}