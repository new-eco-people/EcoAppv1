import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../state-management/store';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserActionConstant } from '../state-management/user-state/user-action-constant';


@Injectable()
export class PublicGuard implements CanActivate {

  constructor(private redux: NgRedux<IAppState>, private router: Router) {}


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    const token = this.redux.getState().user.token;

    if (token && token.asString && !token.isExpired) {

      this.router.navigate(['private'])

      return true;
    }

    // console.log(token);
    this.redux.dispatch({ type: UserActionConstant.LOG_OUT });

      this.router.navigate(['public/signin'], {
        queryParams : {
          returnUrl : state.url
        }
       })

    return  true;

    // return this.authService.isAuthenticated();
  }
}
