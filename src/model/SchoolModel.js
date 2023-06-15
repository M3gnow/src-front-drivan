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

export function buildSchoolsByConductorIdFromService(schoolData) {
    const schoolModel = schoolData.map((school) => {
        return {
            id: school.id,
            description: school.descricao,
            active: school.ativa,
            endereco: {
                id: school.endereco.id
            }
        }
    })

    return schoolModel;
}

export function buildSchoolsByConductorIdToItinierary(schoolData) {
    const schoolModel = schoolData.map((school) => {
        return {
            id: school.id,
            description: school.descricao,
            periods: school.periodos.map((periodo)=>{
                return {
                    id: periodo.id,
                    description: periodo.descricao
                }
            })
        }
    })

    return schoolModel;
}

export function buildSchoolsByIdFromService(schoolByIdData) {
    return {
        id: schoolByIdData.id,
        nameSchool: schoolByIdData.descricao,
        emailSchool: schoolByIdData.email || '',
        phoneSchool: schoolByIdData.telefone || '',
        periods: schoolByIdData.periodos,
        endereco: {
            id: schoolByIdData.endereco.id
        }
    }
}