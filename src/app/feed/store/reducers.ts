import {createFeature, createReducer, on} from '@ngrx/store'
import {feedActions} from './action'
import {FeedStateInterface} from '../types/feedState.interface'

const initialState: FeedStateInterface = {
  isSubmitting: false,
  articles: undefined,
  isLoading: false,
  validationErrors: null,
}

const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,
    on(feedActions.getArticles, (state) => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })),
    on(feedActions.getArticlesSuccess, (state, action) => ({
      ...state,
      isSubmitting: false,
      currentUser: action.articles,
    })),
    on(feedActions.getArticlesFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    }))
  ),
})

export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectIsSubmitting,
  selectValidationErrors,
  selectIsLoading,
  selectArticles,
} = feedFeature
