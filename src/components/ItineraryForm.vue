<template>
  <div class="container mt-3">
        <div>
            <h2>Identificação e contato</h2>
        </div>
        <div class="layoutFormnDefault">
            <div class="input-container col-md-4">
                <label for="descriptionItinerario">Descrição do Itinerario</label>
                <input type="text" id="descriptionItinerario" name="descriptionItinerario" v-model="Itinerary.descriptionItinerario" placeholder="Descrição do itinerario">
            </div>

            <div class="input-container col-md-8">
                <label for="schoolPassenger">Escola</label>
                <v-select 
                    class="input-select"
                    v-model="Itinerary.selectedSchoolItinerario" 
                    :options="schools" 
                    @search="doSearchSchool">
                </v-select>
            </div>

            <div class="input-container col-md-6">
                <label for="period">Periodo</label>
                <v-select 
                    multiple
                    class="input-select"
                    v-model="Itinerary.selectedPeriodSchoolItinerario" 
                    :options="periods" 
                    @search="doSearchPeriod">
                </v-select>
            </div>

            <div class="input-container col-md-6">
                <label for="period">Selecione o tipo de período</label>
                <v-select 
                    class="input-select"
                    v-model="Itinerary.selectedPeriodTypeItinerario" 
                    :options="['entrada', 'saída']" 
                    @search="doSearchPeriod">
                </v-select>
            </div>
        </div>

        <div class="mt-3 d-flex justify-content-end">
            <button type="submit" class="btn btn-light me-3">Cancelar</button>
            <button type="submit" class="btn btn-warning">Enviar</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ItineraryForm',
    data: function() {
        const Itinerary = {
            descriptionItinerario: '',
            selectedSchoolItinerario: [],
            selectedPeriodSchoolItinerario: [],
            selectedPeriodTypeItinerario: [],
        }

        const schools = [
            'Homero fernando Milano',
            'Benedito',
            'Parque viviane'
        ];
        const periods = [
            '08:00 - 12:00',
            '07:00 - 12:00',
            '13:00 - 17:00',
            '18:00 - 22:00'
        ];
        
        return { Itinerary, schools, periods }
    },
}
</script>

<style>
    .input-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
        border-left: 4px solid #FCBA03;
        padding: 5px 10px;
    }

    label {
        font-size: 15px;
        font-weight: bold;
        margin-bottom: 15px;
        
        color: #222;
        
    }

    input {
        padding: 5px 10px;
        width: 400px !important;
    }
</style>