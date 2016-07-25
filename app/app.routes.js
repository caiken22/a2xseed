"use strict";
var router_1 = require('@angular/router');
var moda_routes_1 = require('./moda/moda.routes');
// import { modCRoutes }       from './modc/modc.routes';
// import { modMRoutes }       from './modc/modc.routes';
// import { commonRoutes }       from './common/common.routes';
exports.routes = moda_routes_1.modARoutes.slice();
exports.appRouterProviders = [
    router_1.provideRouter(exports.routes),
];
//# sourceMappingURL=app.routes.js.map