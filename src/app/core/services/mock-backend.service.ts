/**
 * Created by kumars13 on 4/28/17.
 */
import {Injectable} from '@angular/core';
import {MockBackend, MockConnection} from '@angular/http/testing';
import {ResponseOptions, Response, RequestMethod} from '@angular/http';
import {USERS} from '../../shared/models/user.model';
import {IUserLogin, IUserSignUp} from '../../shared/interfaces';

@Injectable()
export class MockBackendService {
  // array in local storage for registered users

  constructor(private backend: MockBackend) {

  }

  start(): void {
    this.backend.connections.subscribe((c: MockConnection) => {

      // Register a User
      if (c.request.url.endsWith('/api/signup') && c.request.method === RequestMethod.Post) {
        // get body content from a Post request
        const newUser: IUserSignUp = JSON.parse(c.request.getBody());
        console.log(newUser);
        // validation to check duplicate user
        console.log(USERS);
        const duplicateUser = USERS.filter(user => {
          return user.userName === newUser.userName;
        });
        console.log(duplicateUser);
        if (duplicateUser.length) {
          // return c.mockError(new Error('Username' + ' ' + newUser.userName + ' ' + 'is already taken'));
          return c.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify({
              status: 400,
              success: false,
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

      // Authenticate
      if (c.request.url.endsWith('/api/login') && c.request.method === RequestMethod.Post) {

        // get user details from post request
        const userDetails: IUserLogin = JSON.parse(c.request.getBody());

        // check if login credentials matches to any user
        const checkUser: Array<IUserSignUp> = USERS.filter(user => {
          return user.password.password === userDetails.password;
        });
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
          // return 401 bad request
          return c.mockRespond(new Response(new ResponseOptions({
            body: JSON.stringify({
              status: 401,
              success: false,
              message: c.mockError(new Error('Username or password is incorrect'))
            })
          })));
        }
        return;
      }
    });
  }
}
