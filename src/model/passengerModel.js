export function builderPassengerFromService(passenger, adress) {
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
        nome: passenger.namePassenger,
        endereco,
        periodoId: 1,
        cpf: passenger.selectedResponsiblePassengers
    }
}

