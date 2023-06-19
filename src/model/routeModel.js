export function builderWaypointsRoutePreview(dataRoute) {
    let waypointCoordinate = [];
    let tableInformation = [];

    dataRoute.movimentacoes.forEach(element => {
        if (element.tipo === 1) {
            if (element.ponto.tipo === 1) {
                const street = element.ponto.passageiro.endereco.rua;
                const number = element.ponto.passageiro.endereco.numero;
                const bairro = element.ponto.passageiro.endereco.bairro;

                const labelAddress = `${street} - Nº ${number} - ${bairro}`

                const streetSchool = element.ponto.escola.endereco.rua;
                const numberSchool = element.ponto.escola.endereco.numero;
                const bairroSchool = element.ponto.escola.endereco.bairro;

                const labelAddressSchool = `${streetSchool} - Nº ${numberSchool} - ${bairroSchool}`

                tableInformation.push({
                    pontoId: element.ponto.id,
                    type: element.ponto.tipo,
                    namePassenger: element.ponto.passageiro.nome,
                    embarquePassenger: labelAddress,
                    destinoPassenger: labelAddressSchool
                });
                
                waypointCoordinate.push(element.ponto.passageiro.endereco.coordenada);
            } else {
                waypointCoordinate.push(element.ponto.escola.endereco.coordenada);
            }

        } else {
            if (element.ponto.tipo === 1) {
                const street = element.ponto.passageiro.endereco.rua;
                const number = element.ponto.passageiro.endereco.numero;
                const bairro = element.ponto.passageiro.endereco.bairro;

                const labelAddress = `${street} - Nº ${number} - ${bairro}`

                const streetSchool = element.ponto.escola.endereco.rua;
                const numberSchool = element.ponto.escola.endereco.numero;
                const bairroSchool = element.ponto.escola.endereco.bairro;

                const labelAddressSchool = `${streetSchool} - Nº ${numberSchool} - ${bairroSchool}`

                tableInformation.push({
                    pontoId: element.ponto.id,
                    type: element.ponto.tipo,
                    namePassenger: element.ponto.passageiro.nome,
                    embarquePassenger: labelAddressSchool,
                    destinoPassenger: labelAddress
                });
                
                waypointCoordinate.push(element.ponto.passageiro.endereco.coordenada)
            } else {
                waypointCoordinate.push(element.ponto.escola.endereco.coordenada);
            }
        }
    });

    const lastWaypoint = waypointCoordinate[waypointCoordinate.length - 1]
    waypointCoordinate = waypointCoordinate.filter((waypoint) => waypoint.id !== lastWaypoint.id);

    return {
        tableInformation,
        waypointCoordinate,
        destination: lastWaypoint
    };
}