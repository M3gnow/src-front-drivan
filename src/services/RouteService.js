import { axiosInstance, config } from './../config'

export const getRoutePreview = (data) => {
    const request = axiosInstance.post(`${config.env.microservice.API_BASE_DRIVAN}/Roads/Rota`, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}