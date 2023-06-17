export function builderResponsavelFromService(responsavel) {
    return {
        nome: responsavel.nameResponsible,
        cpf: responsavel.cpfResponsible,
        celular: responsavel.phoneResponsible,
        email: responsavel.emailResponsible,
        passageiros: {
            id: responsavel.passengerId
        }
    }
}

