import {Routes} from '@angular/router'

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./feed/feed.routes').then((m) => m.feedRoutes),
  },
  {
    path: '',
    loadChildren: () => import('./auth/auth.routes').then((m) => m.authRoutes),
  },
]
