"use strict";
var a_component_1 = require('./a.component');
exports.modARoutes = [
    {
        path: 'a',
        children: [
            {
                path: '',
                component: a_component_1.AComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/a',
        pathMatch: 'prefix'
    }
];
//# sourceMappingURL=moda.routes.js.map