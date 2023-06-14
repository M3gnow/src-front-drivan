import { axiosInstance, config } from './../config'

export const CreateEscola = (data) => {
    const request = axiosInstance.post(`${config.env.microservice.API_BASE_DRIVAN}/escola`, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getSchoolById = (id) => {
    const request = axiosInstance.get(`${config.env.microservice.API_BASE_DRIVAN}/escola/${id}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}

export const getAllSchools = (id) => {
    const request = axiosInstance.get(`${config.env.microservice.API_BASE_DRIVAN}/Escola/all/condutor//${id}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}