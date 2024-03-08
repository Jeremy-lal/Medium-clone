import {createFeature, createReducer, on} from '@ngrx/store'
import {feedActions} from './action'
import {FeedStateInterface} from '../types/feedState.interface'

const initialState: FeedStateInterface = {
  tags: [],
  articles: undefined,
  isLoading: false,
  validationErrors: null,
}

const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,
    on(feedActions.getArticles, feedActions.getTags, (state) => ({
      ...state,
      isLoading: true,
      validationErrors: null,
    })),
    on(feedActions.getArticlesSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      articles: action.articles,
    })),
    on(feedActions.getTagsSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      tags: action.tags,
    })),
    on(
      feedActions.getArticlesFailure,
      feedActions.getTagsFailure,
      (state, action) => ({
        ...state,
        isLoading: false,
        validationErrors: action.errors,
      })
    )
  ),
})

export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectValidationErrors,
  selectIsLoading,
  selectArticles,
  selectTags,
} = feedFeature
