import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/by-name',
      name: 'byName',
      component: () => import('../views/byNameView.vue')
    },
    {
      path: '/by-letter',
      name: 'byLetter',
      component: () => import('../views/byLetterView.vue')
    },
    {
      path: '/ingredients',
      name: 'ingredients',
      component: () => import('../views/IngredientsView.vue')
    },
    {
      path: '/by-ingredient/:id',
      name: 'ingredient',
      component: () => import('../views/byIngredientsView.vue')
    },
    {
      path: '/meal/:id',
      name: 'mealDetail',
      component: () => import('../views/mealDetailView.vue')
    },
  ]
})

export default router
