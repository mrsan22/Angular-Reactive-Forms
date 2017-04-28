import {IUserSignUp} from '../interfaces';
/**
 * Created by kumars13 on 4/28/17.
 */
export const USERS: IUserSignUp[] = [
  {
    id: 1,
    name: {
      firstName: 'Alice',
      lastName: 'Wonderland',
    },
    email: 'alice@gmail.com',
    userName: 'alice',
    password: {
      password: 'alice',
      vPassword: 'alice',
    }
  },
  {
    id: 2,
    name: {
      firstName: 'Bob',
      lastName: 'Hope',
    },
    email: 'bob@gmail.com',
    userName: 'bob',
    password: {
      password: 'bob',
      vPassword: 'bob',
    }
  },
];
