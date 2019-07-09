import { Router } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { BaseApiService } from '../base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService extends BaseApiService  {
  token: string;

  constructor(@Inject(DOCUMENT) document: Document, private http: HttpClient) {
    super(document, 'auth')
  }

  signupUser(data: any) {
    return this.http.post(`${this.api}/signup`, data);
  }

  verifyEmail(data: any) {
    return this.http.post(`${this.api}/verify-email`, data);
  }

  signinUser(email: string, password: string) {
    // your code for checking credentials and getting tokens for for signing in user
  }

  logout() {
    this.token = null;
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token
    return true;
  }
}
