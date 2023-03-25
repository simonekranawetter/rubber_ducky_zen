import App from './App.vue';
import { createApp } from 'vue';
import './style.css';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/HomeView.vue';
import Zen from './views/ZenView.vue';
import RubberDucky from './views/RubberDuckyView.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/zen', component: Zen },
  { path: '/rubberducky', component: RubberDucky },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
