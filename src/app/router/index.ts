import { MainPage } from '@/pages/MainPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { APP_PAGES_NAMES, APP_ROUTERS } from '@/shared/constants';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: APP_ROUTERS.MAIN_PAGE,
    name: APP_PAGES_NAMES.MAIN_PAGE,
    component: MainPage,
  },
  {
    path: APP_ROUTERS.PROFILE_PAGE,
    name: APP_PAGES_NAMES.PROFILE_PAGE,
    component: ProfilePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
