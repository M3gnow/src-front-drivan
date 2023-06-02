export function builderSchoolFromService(school, adress) {
    const endereco = {
        cep: adress.cepAddress,
        rua: adress.streetAddress,
        numero: adress.numberStreetAddress,
        bairro: adress.bairroAddress,
        cidade: adress.cityAddress,
        estado: adress.stateAddress,
        uf: adress.ufAddress,
        complemento: adress.complementAddress
    };

    return {
        nome: school.nameSchool,
        email: school.emailSchool,
        telefone: school.phoneSchool,
        periodoId: school.periods,
        endereco,
    }
}

