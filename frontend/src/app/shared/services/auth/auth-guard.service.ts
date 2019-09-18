import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'app/shared/state-management/store';
import { UserActionConstant } from 'app/shared/state-management/user-state/user-action-constant';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private redux: NgRedux<IAppState>, private router: Router) {}



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const token = this.redux.getState().user.token;

    if (!token || !token.asString || token.isExpired) {

      this.redux.dispatch({ type: UserActionConstant.LOG_OUT });

      this.router.navigate(['public/signin'], {
        queryParams : {
          returnUrl : state.url
        }
       })

      return false;
    }

    // console.log(token);

    return  true;

    // return this.authService.isAuthenticated();
  }
}




