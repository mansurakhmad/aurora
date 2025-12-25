export const APP_PAGES_NAMES = {
  MAIN_PAGE: 'MAIN_PAGE',
  USER_PROFILE: 'USER_PROFILE',
};

export const APP_ROUTERS: Record<keyof typeof APP_PAGES_NAMES, string> = {
  MAIN_PAGE: '/',
  USER_PROFILE: '/profile',
};
