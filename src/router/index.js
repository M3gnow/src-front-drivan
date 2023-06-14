import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
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
import PassengerView from '../views/PassengerView'
import SchoolView from '../views/SchoolView'
import ResponsibleView from '../views/ResponsibleView'

const routes = [
  { path: '/', component: Login},
  {
    path: '/home',
    name: 'home-with-dashboards',
    component: Dashboard
  },
  { path: '/dashboard', component: Dashboard },
  { path: '/passengers', component: Passengers },
  { path: '/schools', component: Schools },
  { path: '/itinerary', component: Itinerary },
  { path: '/conductor', component: Conductor },
  { path: '/responsible', component: Responsible},
  { path: '/conductor/:conductor_id', component: ConductorProfile },
  { path: '/address/:address_id', component: AddressView },
  { path: '/conductor/:conductor_id/periods', component: ListPeriodView },
  { path: '/conductor/:conductor_id/schools', component: ListSchoolView },
  { path: '/passenger/:passenger_id', component: PassengerView },
  { path: '/school/:school_id', component: SchoolView },
  { path: '/responsible/:responsible_id', component: ResponsibleView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
