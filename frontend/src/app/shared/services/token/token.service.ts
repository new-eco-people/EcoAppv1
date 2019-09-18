import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AppToken } from 'app/shared/domain/app-token';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenHelper = new JwtHelperService();

  constructor() { }

  save(token = null) {
    if (token) {
      localStorage.setItem('token', token);
    }
  }

  tokenAsObject(): AppToken {
    const token = localStorage.getItem('token');
    // return {} as AppToken;
    return token ? {asString: token, isExpired: this.tokenHelper.isTokenExpired(token), ...this.decode(token)} : null;
  }

  decode(token: string) {
    return this.tokenHelper.decodeToken(token);
  }

  clear() {
    localStorage.clear();
  }

}
