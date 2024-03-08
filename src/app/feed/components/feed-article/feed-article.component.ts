import {Component, Input, OnInit} from '@angular/core'
import {ArticleInterface} from '../../types/article.interface'
import {DatePipe} from '@angular/common'
import {RouterLink} from '@angular/router'

@Component({
  selector: 'mc-feed-article',
  templateUrl: 'feed-article.component.html',
  standalone: true,
  imports: [DatePipe, RouterLink],
})
export class FeedArticleComponent {
  @Input({required: true}) article!: ArticleInterface
}
