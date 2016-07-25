import { provideRouter, RouterConfig }  from '@angular/router';

import { modARoutes } from './moda/moda.routes';
// import { modCRoutes }       from './modc/modc.routes';
// import { modMRoutes }       from './modc/modc.routes';
// import { commonRoutes }       from './common/common.routes';

export const routes: RouterConfig = [
  ...modARoutes,
//   ...modCRoutes,
//   ...modMRoutes,
//   ...commonRoutes
];

export const appRouterProviders = [
  provideRouter(routes),
];
