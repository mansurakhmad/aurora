export const APP_PAGES_NAMES = {
  MAIN_PAGE: 'MAIN_PAGE',
  PROFILE_PAGE: 'PROFILE_PAGE',
};

export const APP_ROUTERS: Record<keyof typeof APP_PAGES_NAMES, string> = {
  MAIN_PAGE: '/',
  PROFILE_PAGE: '/profile',
};
