import { createRouter, createWebHashHistory } from 'vue-router';
import Top from './pages/Top.vue';
import FizzBuzzPage from './pages/FizzBuzzPage.vue';
import Vuex from './pages/Vuex.vue';

// ルートの定義
const routes = [
  { path: '/', component: Top },
  { path: '/vuex', component: Vuex },
  { path: '/fizzbuzz', component: FizzBuzzPage },
];

// ルーターの作成
export const router = createRouter({
  // GitHub Pages用にWebHashHistoryを使用する
  history: createWebHashHistory(),
  routes,
});
