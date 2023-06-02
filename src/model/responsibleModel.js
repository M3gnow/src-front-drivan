export function builderPassengerFromService(passenger, adress) {
    return {
        nome: passenger.nameResponsible,
        cpf: passenger.cpfResponsible,
        telefone: passenger.phoneResponsible,
        email: passenger.emailResponsible
    }
}

