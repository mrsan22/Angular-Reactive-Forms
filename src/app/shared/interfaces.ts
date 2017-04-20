/**
 * Created by kumars13 on 4/20/17.
 */

export interface IUserSignUp {
  name: {
    firstName: string,
    lastName: string
  };
  email: string;
  userName: string;
  password: {
    password: string,
    vPassword: string
  };
}
