import {BackendErrorsInterface} from '../../shared/types/backendErrors.interface'
import {ArticleInterface} from './article.interface'

export interface FeedStateInterface {
  articles: ArticleInterface[] | null | undefined
  tags: string[] | null | undefined
  isLoading: boolean
  validationErrors: BackendErrorsInterface | null
}
