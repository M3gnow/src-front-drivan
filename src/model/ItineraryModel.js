export function builderAllItinerariesById(itinerariesResponseApi) {
    const itineraries = itinerariesResponseApi.map((itinerario)=>{
        return {
            id: itinerario.id,
            description: itinerario.descricao,
            movements: itinerario.movimentacoes.map((movimentacao)=>{
                return {
                    id: movimentacao.id,
                    school: { description: movimentacao.escola.descricao },
                    period: { description: movimentacao.periodo.descricao },
                    type: movimentacao.tipo === 1 ? "Entrada" : "Saída"
                }
            })
        }
    })
    return itineraries;
}