import { MainPage } from '@/pages/MainPage';
import { APP_PAGES_NAMES, APP_ROUTERS } from '@/shared/constants';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: APP_ROUTERS.MAIN_PAGE,
    name: APP_PAGES_NAMES.MAIN_PAGE,
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
