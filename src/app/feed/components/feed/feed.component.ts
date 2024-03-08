import {Component, OnInit} from '@angular/core'
import {FeedListArticlesComponent} from '../feed-list-articles/feed-list-articles.component'

@Component({
  selector: 'mc-feed',
  templateUrl: 'feed.component.html',
  standalone: true,
  imports: [FeedListArticlesComponent],
})
export class FeedComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
