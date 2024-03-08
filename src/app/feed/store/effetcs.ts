import {inject} from '@angular/core'
import {Actions, createEffect, ofType} from '@ngrx/effects'
import {FeedService} from '../services/feed.service'
import {feedActions} from './action'
import {catchError, map, of, switchMap} from 'rxjs'
import {ArticleInterface} from '../types/article.interface'
import {HttpErrorResponse} from '@angular/common/http'

export const getArticlesEffect = createEffect(
  (actions$ = inject(Actions), feedService = inject(FeedService)) => {
    console.log('getArticlesEffect')

    return actions$.pipe(
      ofType(feedActions.getArticles),
      switchMap(({request}) => {
        return feedService.getArticles(request).pipe(
          map((articles: ArticleInterface[]) => {
            return feedActions.getArticlesSuccess({articles})
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              feedActions.getArticlesFailure({
                errors: errorResponse.error.errors,
              })
            )
          })
        )
      })
    )
  },
  {functional: true}
)
