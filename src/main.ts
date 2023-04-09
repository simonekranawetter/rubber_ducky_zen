import App from './App.vue';
import { createApp } from 'vue';
import './style.css';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/HomeView.vue';
import RubberDucky from './views/RubberDuckyView.vue';
import SelfCare from './views/SelfCareView.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/rubberducky', component: RubberDucky },
  {path: '/selfcare', component: SelfCare },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
