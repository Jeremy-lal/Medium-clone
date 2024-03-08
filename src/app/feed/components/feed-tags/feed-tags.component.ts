import {Component, Input} from '@angular/core'
import {Store} from '@ngrx/store'
import {feedActions} from '../../store/action'

@Component({
  selector: 'mc-feed-tags',
  templateUrl: 'feed-tags.component.html',
  styleUrl: 'feed-tags.component.scss',
  standalone: true,
})
export class FeedTagsComponent {
  @Input({required: true}) tags: string[] = []

  constructor(private store: Store) {}

  selectTag(tag: string) {
    this.store.dispatch(
      feedActions.getArticles({request: {tag: tag, limit: 10, offset: 0}})
    )
  }
}
