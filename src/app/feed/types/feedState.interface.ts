import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface'
import {Article} from './article.interface'

export interface FeedStateInterface {
  isSubmitting: boolean
  articles: Article[] | null | undefined
  isLoading: boolean
  validationErrors: BackendErrorsInterface | null
}
