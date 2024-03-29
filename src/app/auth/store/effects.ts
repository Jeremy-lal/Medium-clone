import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {switchMap, map, catchError, of, tap} from 'rxjs'
import {CurrentUserInterface} from '../../shared/types/currentUser.interface'
import {AuthService} from '../services/auth.service'
import {authActions} from './actions'
import {HttpErrorResponse} from '@angular/common/http'
import {PersistanceService} from '../../shared/services/persistance.service'
import {Router} from '@angular/router'

export const registerEffect = createEffect(
  (
    actions$ = inject(Actions),
    authService = inject(AuthService),
    persitanceService = inject(PersistanceService)
  ) => {
    return actions$.pipe(
      ofType(authActions.register),
      switchMap(({request}) => {
        return authService.register(request).pipe(
          map((currentUser: CurrentUserInterface) => {
            persitanceService.set('accessToken', currentUser.token)
            return authActions.registerSuccess({currentUser})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              authActions.registerFailure({errors: errorResponse.error.errors})
            )
          })
        )
      })
    )
  },
  {functional: true}
)

export const redirectAfterRegisterEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registerSuccess),
      tap(() => {
        router.navigate(['/'])
      })
    )
  },
  {
    functional: true,
    dispatch: false,
  }
)
