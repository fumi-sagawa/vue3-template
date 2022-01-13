import { createRouter, createWebHashHistory } from 'vue-router';
import Top from '@/pages/Top/Top.vue';
import FizzBuzzPage from '@/pages/FizzBuzz/FizzBuzz.vue';
import Angle from '@/pages/Angle/Angle.vue';
import ToDo from '@/pages/ToDo/ToDo.vue';
import LifeCycle from '@/pages/LifeCycle/LifeCycle.vue';
import APITest from '@/pages/APITest/APITest.vue';
import ScssTest from '@/pages/ScssTest/ScssTest.vue';

// ルートの定義
const routes = [
  { path: '/', component: Top },
  { path: '/angle', component: Angle },
  { path: '/todo', component: ToDo },
  { path: '/fizzbuzz', component: FizzBuzzPage },
  { path: '/lifecycle', component: LifeCycle },
  { path: '/apitest', component: APITest },
  { path: '/scssTest', component: ScssTest },
];

// ルーターの作成
export const router = createRouter({
  // GitHub Pages用にWebHashHistoryを使用する
  history: createWebHashHistory(),
  routes,
});
