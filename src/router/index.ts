import { createRouter, createWebHistory } from 'vue-router'
import TaskView from '../views/TaskView.vue'

const routes = [
  {
    path: '/',
    name: 'TaskView',
    component: TaskView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})
export default router;