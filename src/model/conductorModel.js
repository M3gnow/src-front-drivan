export function builderConductorFromService(profileConductor, vehicleConductor, adressConductor) {
    const conductorModel = {
        nome: profileConductor.name,
        cpf: profileConductor.cpf,
        cnh: profileConductor.cnh,
        telefone: profileConductor.phone,
        confirmacaoSenha: profileConductor.secondPassword,
        dtaNascimento: profileConductor.dtaNascimento,
    }

    const veiculo = {
        modelo: vehicleConductor.modelVehicle,
        placa: vehicleConductor.boardVehicle,
        cor: vehicleConductor.colorVehicle,
        capacidade: parseInt(vehicleConductor.capacityVehicle),
    }

    const endereco = {
        cep: adressConductor.cepAddress,
        rua: adressConductor.streetAddress,
        numero: adressConductor.numberStreetAddress,
        bairro: adressConductor.bairroAddress,
        cidade: adressConductor.cityAddress,
        estado: adressConductor.stateAddress,
        uf: adressConductor.ufAddress,
        complemento: adressConductor.complementAddress
    };

    const usuario = {
        email: profileConductor.email,
        senha: profileConductor.password
    }
    
    return { 
        veiculo,
        endereco,
        usuario,
        ...conductorModel
    };
}

export function builderConductorById(conductorResponseApi) {
    const profileConductorData = {
        name: conductorResponseApi.nome,
        cpf: conductorResponseApi.cpf,
        cnh: conductorResponseApi.cnh,
        email: conductorResponseApi.usuario.email,
        password: conductorResponseApi.usuario.senha,
        dtaNascimento: new Date(conductorResponseApi.dtaNascimento).toISOString().slice(0,10),
        endereco: {
            id: conductorResponseApi.endereco.id
        }
    };

    return profileConductorData
}

