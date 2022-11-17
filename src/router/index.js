import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import Passengers from '../views/Passengers.vue'
import Schools from '../views/Schools.vue'
import Itinerary from '../views/Itinerary.vue'
import Conductor from '../views/Conductor.vue'
import Responsible from '../views/Responsible.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/dashboard', component: Dashboard },
  { path: '/passengers', component: Passengers },
  { path: '/schools', component: Schools },
  { path: '/itinerary', component: Itinerary },
  { path: '/conductor', component: Conductor },
  { path: '/responsible', component: Responsible},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
