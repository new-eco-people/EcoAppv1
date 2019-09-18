import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../state-management/store';
import { AppRoutes } from '../routes/app.routes';


@Injectable()
export class AuthUserGuard implements CanActivate {

    appRoutes = AppRoutes.generateRoutes();
    returnUrl: string;

    constructor(private redux: NgRedux<IAppState>, private router: Router, private route: ActivatedRoute) {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'private';
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const token = this.redux.getState().user.token;

        if (token && token.asString && !token.isExpired) {
            this.router.navigate([this.returnUrl]);

            return false;
        }

        return true;
    }
}
