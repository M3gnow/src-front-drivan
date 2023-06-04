export function builderAddressById(addressResponseApi) {
    console.log('addressResponseApi', addressResponseApi);

    const addressResponseData = {
        cepAddress: addressResponseApi.cep,
        streetAddress: addressResponseApi.rua,
        numberStreetAddress: addressResponseApi.numero,
        bairroAddress: addressResponseApi.bairro,
        cityAddress: addressResponseApi.cidade,
        stateAddress: addressResponseApi.estado,
        ufAddress: addressResponseApi.uf,
        complementAddress: addressResponseApi.complemento
    };

    return addressResponseData;
}