import { RouterConfig }         from '@angular/router';
import { AComponent }    from './a.component';

export const modARoutes: RouterConfig = [
    {
        path: 'a',
        children: [
            {
                path: '',
                component: AComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: '/a',
        pathMatch: 'prefix'
    }
]