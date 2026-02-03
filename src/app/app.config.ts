import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling } from '@angular/router';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { of, Observable } from 'rxjs';
import en from '../assets/i18n/en.json';
import ar from '../assets/i18n/ar.json';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

class MemoryLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(lang === 'ar' ? ar : en);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
     provideRouter(routes,withHashLocation(),withInMemoryScrolling({scrollPositionRestoration:"disabled"})), 
     provideClientHydration(withEventReplay()),
     provideHttpClient(),
     importProvidersFrom(TranslateModule.forRoot({
       loader: {
         provide: TranslateLoader,
         useClass: MemoryLoader
       },
       defaultLanguage: 'en'
     }))]
};
