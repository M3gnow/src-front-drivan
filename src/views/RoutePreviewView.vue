<template>
    <TheHeader/>

    <div class="container mt-1 d-flex justify-content-between">
        <div class="d-flex">
            <h1 class="m-2">
                <i class="bi bi-sign-turn-slight-right m-1" />
            </h1>
            <h1 class="m-2 textWhite">
                Confirmar Rota
            </h1>
        </div>

        <div class="d-flex mt-3">
            <h2 class="textWhite">
                {{ labelTimeNow }}
            </h2>
        </div>
    </div>

    <!-- <div class="container">
        <h2 class="textWhite">
            {{ labelPosition }}
        </h2>
    </div> -->

    <div class="mt-1 d-flex justify-content-center">
      <div id="map">

      </div>
    </div>

    <div class="container">
        <table class="table table-hover mt-3 table-bordered">
            <thead>
                <tr>
                    <th class="text-center textWhite" scope="col">Passageiro</th>
                    <th class="text-center textWhite" scope="col">Embarque</th>
                    <th class="text-center textWhite" scope="col">Destino</th>
                    <th class="text-center textWhite" scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="passengerMoviment of passengersMoviments" v-bind:key="passengerMoviment.pontoId">
                    <td class="text-center textWhite">{{ passengerMoviment.namePassenger }}</td>
                    <td class="text-center textWhite">{{ passengerMoviment.embarquePassenger }}</td>
                    <td class="text-center textWhite">{{ passengerMoviment.destinoPassenger }}</td>
                    <td class="text-center textWhite">
                        <button class="btn btn-danger m-1" @click="removeItem(passengerMoviment)">
                            Remover
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    <div class="container d-flex justify-content-end">
        <button class="btn btn-success m-1">
            Iniciar Rota
        </button>
    </div>
    <div class="mt-5">
        <Footer />
    </div>
</template>
  
<script>
import { useRoute } from 'vue-router'
import TheHeader from '../components/TheHeader.vue'
import Footer from '../components/Footer.vue'
import { getRoutePreview } from '../services/RouteService'
import { builderWaypointsRoutePreview } from '../model/routeModel'

export default {
    name: 'RoutePreviewView',
    data: () => {
        const { params } = useRoute();
        const labelTimeNow = '';
        const passengersMoviments = []
        const longitude = '';
        const latitude = '';
        const labelPosition = ''

        return { params, labelTimeNow, passengersMoviments, labelPosition, longitude, latitude }
    },
    components: {
        TheHeader,
        Footer
    },
    methods: {
        formatDate(dateForFormat) {
            const dateTime = new Date(dateForFormat);
            const day = dateTime.getDate() > 9 ? dateTime.getDate() : `0${dateTime.getDay()}`;
            const mounth = (dateTime.getMonth() + 1) <= 9 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1;
            const year = dateTime.getFullYear();
            const hours = dateTime.getHours();
            const minutes = dateTime.getMinutes() <= 9 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();

            const date = `${day}/${mounth}/${year} - ${hours}:${minutes}`

            return date;
        },
        initMap(longitude, latitude, listWaypointCoordinate, destinoFinish) {
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();

            const mapOptions = {
                center: { lat: -23.5505, lng: -46.6333 },
                zoom: 0
            };

            const map = new google.maps.Map(document.getElementById("map"), mapOptions);
            directionsRenderer.setMap(map);

            const origin = new google.maps.LatLng(latitude, longitude);

            console.log('megnow destino', destinoFinish.longitude, destinoFinish.latitude);
            const destination = new google.maps.LatLng(destinoFinish.latitude, destinoFinish.longitude);

            const waypoints = listWaypointCoordinate.map((waypoint) => {
                return {
                    location: new google.maps.LatLng(waypoint.latitude, waypoint.longitude)
                }
            })

            const request = {
                origin,
                destination,
                waypoints,
                travelMode: google.maps.TravelMode.DRIVING,
            };

            directionsService.route(request, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
                }
            });
        },
        successGetLocation (position) {
            console.log('estranho pra caralho', position);
            this.longitude = position.coords.longitude;
            this.latitude = position.coords.latitude;
            this.labelPosition = `Latitude:${position.coords.latitude}, Longitude:${position.coords.longitude}`

            this.getData(this.longitude, this.latitude);
        },
        errorGetLocation (err) {
            console.log(err);
        },
        getLocation() {
            navigator.geolocation.getCurrentPosition(this.successGetLocation, this.errorGetLocation)
        },
        getData(longitude, latitude) {
            getRoutePreview({
                    "longitude": longitude,
                    "latitude": latitude,
                    "itinerarioId": this.params.itinerary_id,
                    "condutorId": this.params.conductor_id
                })
                .then((data) => {
                    const { tableInformation, waypointCoordinate, destination } = builderWaypointsRoutePreview(data);
                    this.passengersMoviments = tableInformation;

                    this.initMap(
                        longitude,
                        latitude,
                        waypointCoordinate,
                        destination
                    );
                })
                .catch((err) => {
                    console.log('error getRoutePreview', err);
                })  
        }
    },
    mounted() {
        const date = new Date();
        const labelDateTimeNow = this.formatDate(date);
        this.labelTimeNow = labelDateTimeNow;
        this.getLocation();
    }
}
</script>

<style>

</style>