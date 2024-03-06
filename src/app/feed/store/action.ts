import {createActionGroup, props} from '@ngrx/store'
import {ListArticlesParamsRequest} from '../types/listArticlesParamsRequest.interface'
import {ArticleInterface} from '../types/article.interface'
import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface'

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    'Get Articles': props<{request: ListArticlesParamsRequest}>(),
    'Get Articles success': props<{articles: ArticleInterface[]}>(),
    'Get Articles Failure': props<{errors: BackendErrorsInterface}>(),
  },
})
