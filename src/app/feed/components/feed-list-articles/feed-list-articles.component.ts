import {Component, OnInit} from '@angular/core'
import {FeedArticleComponent} from '../feed-article/feed-article.component'
import {feedActions} from '../../store/action'
import {Store} from '@ngrx/store'
import {combineLatest} from 'rxjs'
import {
  selectArticles,
  selectIsLoading,
  selectTags,
  selectValidationErrors,
} from '../../store/reducers'
import {CommonModule} from '@angular/common'
import {FeedTagsComponent} from '../feed-tags/feed-tags.component'

@Component({
  selector: 'mc-feed-list-articles',
  templateUrl: 'feed-list-articles.component.html',
  standalone: true,
  imports: [FeedArticleComponent, FeedTagsComponent, CommonModule],
})
export class FeedListArticlesComponent implements OnInit {
  data$ = combineLatest({
    articles: this.store.select(selectArticles),
    tags: this.store.select(selectTags),
    isLoading: this.store.select(selectIsLoading),
    backendError: this.store.select(selectValidationErrors),
  })

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(
      feedActions.getArticles({request: {limit: 10, offset: 0}})
    )
    this.store.dispatch(feedActions.getTags({request: ''}))
  }
}
