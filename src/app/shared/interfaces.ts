/**
 * Created by kumars13 on 4/20/17.
 */
// signup user structure
export interface IUserSignUp {
  id?: number;
  name: {
    firstName: string,
    lastName?: string
  };
  email: string;
  userName: string;
  password: {
    password: string,
    vPassword: string
  };
}

// login user structure
export interface IUserLogin {
  username: string;
  password: string;
}
