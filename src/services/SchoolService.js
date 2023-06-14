import { axiosInstance, config } from './../config'

export const CreateEscola = (data) => {
    const request = axiosInstance.post(`${config.env.microservice.API_BASE_DRIVAN}/escola`, data)
        .then((res) => Promise.resolve(res.data))
        .catch((error) => Promise.reject(error))

    return request;
}