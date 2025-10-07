import { createRouter, createWebHashHistory } from 'vue-router'
import VIfView from '../views/VIfView.vue'
import VShowView from '../views/VShowView.vue'
import VForView from '../views/VForView.vue'
import VBindKeyView from '../views/VBindKeyView.vue'

const routes = [
  { path: '/', redirect: '/v-if' },
  { path: '/v-if', component: VIfView },
  { path: '/v-show', component: VShowView },
  { path: '/v-for', component: VForView },
  { path: '/v-bind-key', component: VBindKeyView }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})