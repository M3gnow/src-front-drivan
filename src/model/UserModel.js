export function builderUser(userResponseApi){
    return {
        id: userResponseApi.id,
        tipo: userResponseApi.tipo,
        token: userResponseApi.token
    }
}