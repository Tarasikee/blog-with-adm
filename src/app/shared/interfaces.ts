export interface User {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}

export interface FBAuthResponse {
  idToken: string;
  expiresIn: string;
}

export interface IPost {
  id?: string;
  title: string;
  text: string;
  author: string;
  date: Date;
}

export interface FBCreateResponse {
  name: string;
}
