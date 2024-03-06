import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface'
import {ArticleInterface} from './article.interface'

export interface FeedStateInterface {
  isSubmitting: boolean
  articles: ArticleInterface[] | null | undefined
  isLoading: boolean
  validationErrors: BackendErrorsInterface | null
}
