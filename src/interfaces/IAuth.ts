export interface IAuth {
  user: object | null;

  isRegisterLoading: boolean;
  registerSuccess: any;
  registerErrors: any;

  isLoginLoading: boolean;
  loginSuccess: any;
  loginErrors: any;
}
