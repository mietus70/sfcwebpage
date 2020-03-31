import { AppBrowserModule }               from './app/app.browser.module';
import { ApplicationRef, enableProdMode } from '@angular/core';
import { platformBrowserDynamic }         from '@angular/platform-browser-dynamic';
//import { AppModule } from './app/app.module';
import { environment }                    from './environments/environment';

import { enableDebugTools } from "@angular/platform-browser";

// enableProdMode();

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppBrowserModule).then((
  module => {
    let applicationRef = module.injector.get(ApplicationRef);
    let appComponent = applicationRef.components[ 0 ];
    enableDebugTools(appComponent);
  }
));
