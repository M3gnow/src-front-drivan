import { axiosInstance, config } from './../config'

export const getAllItineraries = (id) => {
    const request = axiosInstance.get(`${config.env.microservice.API_BASE_DRIVAN}/Itinerario/all/${id}`)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}