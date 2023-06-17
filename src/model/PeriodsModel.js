export function builderAllPeriodsById(SchoolresponseApi) {
    const periods = SchoolresponseApi.periodos.map((periodo) => {
        return {
            id: periodo.id,
            description: periodo.descricao,
            entrada: periodo.entrada || '',
            saida: periodo.saida || '',
            passengers : periodo.passageiros.map((passageiro) => {
                return {
                    id : passageiro.id,
                    name : passageiro.nome,
                    endereco : passageiro.endereco === null ? null :{
                        id : passageiro.endereco.id
                    },
                    responsavel : passageiro.responsavel === null ? null :{
                        id : passageiro.responsavel.id
                    }
                }
            })
        }
    })
    return periods;
}