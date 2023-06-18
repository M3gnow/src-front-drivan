<template>
    <TheHeader/>

    <div class="container mt-1">
        <div class="d-flex">
            <h1 class="m-2">
                <i class="bi bi-sign-turn-slight-right m-1" />
            </h1>
            <h1 class="m-2 textWhite">
                Rota
            </h1>
        </div>
    </div>

    <div class="mt-1 d-flex justify-content-center">
      <div id="map">

      </div>
    </div>

    <div class="container d-flex justify-content-around mt-3">
        <button class="btn btn-danger ms-5 m-1">
            Cancelar Embarque
        </button>

        <h4 class="mt-2">Gabriel Monteiro</h4>
        
        <button class="btn btn-success me-5 m-1">
            Confirmar Embarque
        </button>
    </div>

    <div class="mt-5">
        <Footer />
    </div>
  </template>
  
<script>
import TheHeader from '../components/TheHeader.vue'
import Footer from '../components/Footer.vue'
export default {
    data() {
        return {}
    },
    components: {
        TheHeader,
        Footer
    },
    mounted() {
        this.initMap();
    },
    methods: {
        initMap() {
            const directionsService = new google.maps.DirectionsService();
            const directionsRenderer = new google.maps.DirectionsRenderer();

            const mapOptions = {
                center: { lat: -23.5505, lng: -46.6333 },
                zoom: 0,
            };

            const map = new google.maps.Map(document.getElementById("map"), mapOptions);
            directionsRenderer.setMap(map);

            const origin = new google.maps.LatLng(-23.484521613959657, -46.37396179857363);
            const destination = new google.maps.LatLng(-23.481843901242094, -46.35286310687819);

            const waypoints = [
                { location: new google.maps.LatLng(-23.5500, -46.6200) },
                { location: new google.maps.LatLng(-23.5430, -46.6225) },
                { location: new google.maps.LatLng(-23.5455, -46.6285) }
            ];

            const request = {
                origin,
                destination,
                // waypoints,
                travelMode: google.maps.TravelMode.DRIVING,
            };

            directionsService.route(request, function (result, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                directionsRenderer.setDirections(result);
                }
            });
        },
    },
};
</script>
  
<style>
    #map {
        width: 980px;
        height: 400px;
    }
</style>