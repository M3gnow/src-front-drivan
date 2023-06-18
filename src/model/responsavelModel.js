export function builderResponsavelFromService(responsavel) {
    return {
        nome: responsavel.nameResponsible,
        cpf: responsavel.cpfResponsible,
        telefone: responsavel.phoneResponsible,
        email: responsavel.emailResponsible,
        passageiroId: responsavel.passengerId
        
    }
}

