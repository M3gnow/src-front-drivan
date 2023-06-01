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
        capacidade: vehicleConductor.capacityVehicle,
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

