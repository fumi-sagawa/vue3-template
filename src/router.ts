import { createRouter, createWebHashHistory } from 'vue-router';
import Top from './pages/Top.vue';
import FizzBuzzPage from './pages/FizzBuzzPage.vue';
import Vuex from './pages/Vuex.vue';
import Pinia from './pages/Pinia.vue';
import LocalStrageWithPinia from './pages/LocalStrageWithPinia.vue';
import LifeCycle from './pages/LifeCycle.vue';
import Provider from './pages/Provider.vue';

// ルートの定義
const routes = [
  { path: '/', component: Top },
  { path: '/vuex', component: Vuex },
  { path: '/pinia', component: Pinia },
  { path: '/localstragewithpinia', component: LocalStrageWithPinia },
  { path: '/fizzbuzz', component: FizzBuzzPage },
  { path: '/lifecycle', component: LifeCycle },
  { path: '/injectprovide', component: Provider },
];

// ルーターの作成
export const router = createRouter({
  // GitHub Pages用にWebHashHistoryを使用する
  history: createWebHashHistory(),
  routes,
});
