import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {ListArticlesParamsRequest} from '../types/listArticlesParamsRequest.interface'
import {environment} from '../../../environments/environment'
import {ListArticlesResponse} from '../types/listArticlesResponse.interface'
import {ArticleInterface} from '../types/article.interface'
import {ListTagsResponse} from '../types/listTagsResponse.interface'

@Injectable({providedIn: 'root'})
export class FeedService {
  constructor(private http: HttpClient) {}

  getArticles(
    data: ListArticlesParamsRequest = {}
  ): Observable<ArticleInterface[]> {
    const url =
      environment.apiUrl + '/articles' + '?' + this.constructQueryParams(data)
    console.log(url)

    return this.http
      .get<ListArticlesResponse>(url)
      .pipe(map((response: ListArticlesResponse) => response.articles))
  }

  getTags(): Observable<string[]> {
    const url = environment.apiUrl + '/tags'

    return this.http
      .get<ListTagsResponse>(url)
      .pipe(map((response: ListTagsResponse) => response.tags))
  }

  private constructQueryParams(params: ListArticlesParamsRequest): string {
    return Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${encodeURIComponent(value.toString())}`)
      .join('&')
  }
}

// https://api.realworld.io/api/articles?limit=10&offset=0

// https://api.realworld.io/api/articles?limit=10&offset=0
