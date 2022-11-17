export function builderConductorFromService(conductor, vehicle) {
    const conductorModel = {
        nome: conductor.name,
        cpf: conductor.cpf,
        cnh: conductor.cnh,
        email: conductor.email,
        telefone: conductor.phone,
        senha: conductor.password,
        confirmacaoSenha: conductor.secondPassword,
    }

    const conductorVehicleModel= {
        modelo: vehicle.modelVehicle,
        placa: vehicle.boardVehicle,
        cor: vehicle.colorVehicle,
        capacidade: vehicle.capacityVehicle,
    }
    
    return { ...conductorModel, ...conductorVehicleModel };
}