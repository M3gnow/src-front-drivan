export function builderItineraryFromService(itinerary) {
    return {
        descricao: itinerary.descriptionItinerario,
        escolaId: itinerary.selectedSchoolItinerario,
        periodoId: itinerary.selectedPeriodSchoolItinerario,
        tipoPeridoId: itinerary.selectedPeriodTypeItinerario
    }
}

