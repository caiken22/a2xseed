import {bootstrap}    from '@angular/platform-browser-dynamic';
import { appRouterProviders } from './app.routes';
import 'rxjs/Rx'; // get everything from Rx

import { AppComponent } from './app.component';

bootstrap(AppComponent, [
    appRouterProviders
]);
