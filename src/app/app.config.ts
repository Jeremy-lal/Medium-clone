import {ApplicationConfig, isDevMode} from '@angular/core'
import {provideRouter} from '@angular/router'
import {provideHttpClient} from '@angular/common/http'
import {routes} from './app.routes'

import {provideState, provideStore} from '@ngrx/store'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {authFeatureKey, authReducer} from './auth/store/reducers'
import {provideEffects} from '@ngrx/effects'
import * as authEffects from './auth/store/effects'
import {feedFeatureKey, feedReducer} from './feed/store/reducers'

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore(),
    provideState(authFeatureKey, authReducer),
    provideState(feedFeatureKey, feedReducer),
    provideEffects(authEffects),
    provideStoreDevtools({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
      connectInZone: true, // If set to true, the connection is established within the Angular zone
    }),
  ],
}
