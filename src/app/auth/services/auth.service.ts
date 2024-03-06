import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Observable, map} from 'rxjs'
import {RegisterRequestInterface} from '../types/registerRequest.interface'
import {CurrentUserInterface} from '../../shared/types/currentUser.interface'
import {AuthResponseInterface} from '../types/authResponse.interface'
import {environment} from '../../../environments/environment'
import {LoginRequestInterface} from '../types/loginRequest.interface'

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private http: HttpClient) {}

  register(data: RegisterRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }

  login(data: LoginRequestInterface): Observable<CurrentUserInterface> {
    const url = environment.apiUrl + '/users/login'

    return this.http
      .post<AuthResponseInterface>(url, data)
      .pipe(map((response: AuthResponseInterface) => response.user))
  }
}
