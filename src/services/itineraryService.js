import { axiosInstance, config } from './../config'

export const createPassenger = (passenger) => {
    const request = axiosInstance.post(`${config.env.microservice.API_BASE_DRIVAN}`, passenger)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}