/**
 * Created by kumars13 on 5/1/17.
 */
import {Injectable, Output, EventEmitter} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {IUserLogin} from '../../shared/interfaces';


@Injectable()
export class AuthService {
  authUrl: string = '/api/auth';
  isAuthenticated: boolean = false;
  @Output() authChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private http: Http) {

  }

  // Raise changed event
  private userAuthChanged(status: boolean) {
    this.authChanged.emit(status);
  }

  login(user: IUserLogin): Observable<boolean> {
    return this.http
      .post(this.authUrl + '/login', user)
      .map((response: Response) => {
        const loggedInJson = response.json();
        this.isAuthenticated = loggedInJson.success;
        this.userAuthChanged(loggedInJson);
        return loggedInJson;
      })
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  logout(): Observable<boolean> {
    return this.http.post(this.authUrl + '/logout', null)
      .map((response: Response) => {
        const loggedOut = response.json();
        this.isAuthenticated = !loggedOut;
         // Return loggedIn status
        this.userAuthChanged(!loggedOut);
        return status;
      })
      .catch(this.handleError);
  }

  private handleError(error: Response) {
    console.error('server error:', error);
    if (error instanceof Response) {
      let errMessage = '';
      try {
        errMessage = error.json().error;
      } catch (err) {
        errMessage = error.statusText;
      }
      return Observable.throw(errMessage);
    }
    return Observable.throw(error || 'Server error');
  }
}
