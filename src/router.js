import { createRouter, createWebHistory } from 'vue-router'
import Hello from './components/Hello'

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path:'/', name: 'Hello' , component: Hello},
    { path: '/info', name: 'Info' , component: () => import('./components/Information') },
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'active'
})