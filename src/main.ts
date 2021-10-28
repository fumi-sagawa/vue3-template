import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store';
import { createPinia } from 'pinia';
import { router } from './router';

const app = createApp(App);
app.use(store);
app.use(createPinia());
app.use(router);
app.mount('#app');
