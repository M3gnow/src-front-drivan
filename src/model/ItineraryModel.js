export function builderAllItinerariesById(itinerariesResponseApi) {
    const itineraries = itinerariesResponseApi.map((itinerario) => {
        return {
            id: itinerario.id,
            description: itinerario.descricao,
            movements: itinerario.movimentacoes.map((movimentacao) => {
                return {
                    id: movimentacao.id,
                    school: { description: movimentacao.escola.descricao },
                    period: { description: movimentacao.periodo.descricao },
                    hour: movimentacao.horario,
                    type: movimentacao.tipo === 1 ? "Entrada" : "Saída"
                }
            })
        }
    })
    return itineraries;
};

export function builderItineraryFromService(user,data){
    const itinerary = {
        descricao: data.descriptionItinerario,
        condutorId: user,
        itinerarios: data.moviments.map((movement) => {
            return {
                escolaId: movement.school.id,
                periodoId: movement.period.id,
                tipoMovimentacao: movement.type
            }
        })
    }
    return itinerary;
}