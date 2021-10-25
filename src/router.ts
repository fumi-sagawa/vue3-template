import { createRouter, createWebHashHistory } from 'vue-router';
import Top from './components/pages/Top.vue';
import FizzBuzz from './components/pages/FizzBuzz.vue';
import Vuex from './components/pages/Vuex.vue';

// ルートの定義
const routes = [
  { path: '/', component: Top },
  { path: '/vuex', component: Vuex },
  { path: '/fizzbuzz', component: FizzBuzz },
];

// ルーターの作成
export const router = createRouter({
  // GitHub Pages用にWebHashHistoryを使用する
  history: createWebHashHistory(),
  routes,
});
