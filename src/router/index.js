import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Dashboard from '../views/Dashboard.vue'
import Passengers from '../views/Passengers.vue'
import Schools from '../views/Schools.vue'
import Itinerary from '../views/Itinerary.vue'
import Conductor from '../views/Conductor.vue'
import Responsible from '../views/Responsible.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home-with-dashboards',
    component: Dashboard
  },
  { path: '/dashboard', component: Dashboard },
  { path: '/passengers', component: Passengers },
  { path: '/schools', component: Schools },
  { path: '/itinerary', component: Itinerary },
  { path: '/conductor', component: Conductor },
  { path: '/responsible', component: Responsible},
  { path: '/login', component: Login},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
