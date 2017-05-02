/**
 * Created by kumars13 on 4/28/17.
 */
import {Injectable} from '@angular/core';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {ResponseOptions, Response, RequestMethod, Http, BaseRequestOptions} from '@angular/http';
import {USERS} from '../../../shared/models/user.model';
import {IUserLogin, IUserSignUp} from '../../../shared/interfaces';

@Injectable()
export class MockBackendService {

  constructor(private backend: MockBackend) {

  }

  start(): void {
    this.backend.connections.subscribe((c: MockConnection) => {

      // Register a User
      if (c.request.url.endsWith('/api/signup') && c.request.method === RequestMethod.Post) {
        // get body content from a Post request
        const newUser: IUserSignUp = JSON.parse(c.request.getBody());
        // validation to check duplicate user
        const duplicateUser = USERS.filter(user => {
          return user.userName === newUser.userName;
        });
        if (duplicateUser.length) {
          // return c.mockError(new Error('Username' + ' ' + newUser.userName + ' ' + 'is already taken'));
          return c.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify({
              status: 400,
              success: false,
              userName: newUser.userName,
              message: 'Username' + ' ' + newUser.userName + ' ' + 'is already taken'
            })
          })));
        }
        // save new user
        newUser.id = USERS.length + 1;
        USERS.push(newUser);
        // repsond 200 ok
        c.mockRespond(new Response(new ResponseOptions({
          body: JSON.stringify({status: 200, success: true})
        })));
        return;
      }
    });
  }

  auth(): void {
    this.backend.connections.subscribe((c: MockConnection) => {
      if (c.request.url.endsWith('/api/auth/login') && c.request.method === RequestMethod.Post) {
        // get user details from post request
        const userDetails: IUserLogin = JSON.parse(c.request.getBody());
        // check if login credentials matches to any user
        const checkUser: Array<IUserSignUp> = USERS.filter(user => {
          return user.password.password === userDetails.userCredentials.password;
        });
        console.log(checkUser);
        if (checkUser.length) {
          const user: IUserSignUp = checkUser[0];
          // respond 200 ok
          c.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify({
              id: user.id,
              username: user.userName,
              firstName: user.name.firstName,
              lastName: user.name.lastName,
              token: 'fake-jwt-token',
              status: 200,
              success: true
            })
          })));
        } else {
          // return 401 Unauthorized
          return c.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify({
              status: 401,
              success: false,
              message: 'Username or password is incorrect'
            })
          })));
        }
        return;
      }
    });
  }
    logout(): void {
    this.backend.connections.subscribe((c: MockConnection) => {
      if (c.request.url.endsWith('/api/auth/logout') && c.request.method === RequestMethod.Post) {
          // respond 200 ok
          c.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify({
              token: 'fake-jwt-token',
              status: 200,
              success: false
            })
          })));
        return;
      }
    });
  }
}
