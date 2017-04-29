import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {IUserSignUp} from '../../shared/interfaces';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService {

  constructor(private http: Http) {

  }

  create(user: IUserSignUp): Observable<JSON> {
    return this.http
      .post('/api/signup', user, null)
      .map((response: Response) => response.json())
      .do(data => console.log(data))
      .catch(this.handleError);
  }

  // private helper methods
  // private jwt() {
  //   // create authorization header with jwt token
  //   let currentUser = JSON.parse(localStorage.getItem('currentUser'));
  //   if (currentUser && currentUser.token) {
  //     let headers = new Headers({'Authorization': 'Bearer ' + currentUser.token});
  //     return new RequestOptions({headers: headers});
  //   }
  // }

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
