import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {ListArticlesParamsRequest} from '../types/listArticlesParamsRequest.interface'
import {environment} from '../../../environments/environment'
import {ListArticlesResponse} from '../types/listArticlesResponse.interface'
import {ArticleInterface} from '../types/article.interface'

@Injectable({providedIn: 'root'})
export class FeedService {
  constructor(private http: HttpClient) {}

  getArticles(
    data: ListArticlesParamsRequest = {}
  ): Observable<ArticleInterface[]> {
    const url =
      environment.apiUrl + '/articles' + this.constructQueryParams(data)

    return this.http
      .post<ListArticlesResponse>(url, data)
      .pipe(map((response: ListArticlesResponse) => response.articles))
  }

  private constructQueryParams(params: ListArticlesParamsRequest): string {
    return Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => `${key}=${encodeURIComponent(value.toString())}`)
      .join('&')
  }
}
