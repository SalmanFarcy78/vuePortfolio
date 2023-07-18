import { createApp } from 'vue'
import './css/style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router';
import About from './components/About.vue';
import Conta from './components/Conta.vue';

const routes = [
  { path: '/components/About.vue', component: About },
  { path: '/components/Conta', component: Conta },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);

app.mount('#app');

// createApp(App).mount('#app')
