export function builderSchoolFromService(userId,school, adress, periods) {
    const enderecos = {
        cep: adress.cepAddress,
        rua: adress.streetAddress,
        numero: adress.numberStreetAddress,
        bairro: adress.bairroAddress,
        cidade: adress.cityAddress,
        estado: adress.stateAddress,
        uf: adress.ufAddress,
        complemento: adress.complementAddress
    };
    console.log('enderecos ',enderecos)
    return {
        condutorId: userId,
        escolas: [{
            descricao: school.nameSchool,
            ativa: true,
            endereco: enderecos,
            periodos: periods
        }]
    }
}