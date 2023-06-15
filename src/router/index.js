import { createRouter, createWebHistory } from 'vue-router'
import Passengers from '../views/Passengers.vue'
import Schools from '../views/Schools.vue'
import Itinerary from '../views/Itinerary.vue'
import Conductor from '../views/Conductor.vue'
import Responsible from '../views/Responsible.vue'
import Login from '../views/Login.vue'
import ConductorProfile from '../views/ConductorProfile'
import AddressView from '../views/AddressView'
import ListPeriodView from '../views/ListPeriodView'
import ListSchoolView from '../views/ListSchoolView'
import ListItineraryView from '../views/ListItineraryView'
import PassengerView from '../views/PassengerView'
import SchoolView from '../views/SchoolView'
import ResponsibleView from '../views/ResponsibleView'

const routes = [
  /* Login */
  { path: '/', component: Login},
  
  /* Registers */
  { path: '/passengers', component: Passengers },
  { path: '/schools', component: Schools },
  { path: '/itinerary', component: Itinerary },
  { path: '/conductor', component: Conductor },
  { path: '/responsible', component: Responsible},
  
  /* View Conductor */
  { path: '/conductor/:conductor_id', component: ConductorProfile },
  { path: '/conductor/:conductor_id/schools', component: ListSchoolView },
  { path: '/conductor/:conductor_id/itineraries', component: ListItineraryView },

  /* View Address */
  { path: '/address/:address_id', component: AddressView },

  /* View School */
  { path: '/school/:school_id/periods', component: ListPeriodView },
  { path: '/school/:school_id', component: SchoolView },
  
  /* View Passenger */
  { path: '/passenger/:passenger_id', component: PassengerView },

  /* View Responsible */
  { path: '/responsible/:responsible_id', component: ResponsibleView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
