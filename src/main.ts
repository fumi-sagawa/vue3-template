import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { router } from './router';
//モックAPI
import { worker } from '@/mockAPI/browser';

if (import.meta.env.VITE_API_TESTING === 'enable') {
  console.log('APIスタート');
  worker.start();
}

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
