export interface User {
  id?: string;
  login: string;
  password: string;
  e_mail?: string;
}

export interface LoginResponse {
  token: string;
  login: string;
  e_mail: string;
}
