import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {environment} from '../../../libs/frontend/services/src/lib/services/environment';
import {AppModule} from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
