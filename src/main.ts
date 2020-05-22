import { enableProdMode, ViewEncapsulation, MissingTranslationStrategy } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  defaultEncapsulation: ViewEncapsulation.Emulated,
  missingTranslation: MissingTranslationStrategy.Warning,
  preserveWhitespaces: false,
  useJit: false
})
  .catch(err => console.error(err));
