import { axiosInstance, config } from './../config'

export const PostLogin = (data) => {
    const request = axiosInstance.post(`${config.env.microservice.API_BASE_DRIVAN}/Login`, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}