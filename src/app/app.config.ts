import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { reducers } from './store/store';
import { provideEffects } from '@ngrx/effects';
import { HeroEffects } from 'entities/hero';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideStore(reducers),
    provideEffects(HeroEffects)
],
};
