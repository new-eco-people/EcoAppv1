import { NgRedux } from '@angular-redux/store';
import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as _ from 'lodash';
import { IAppState } from '../state-management/store';



@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private redux: NgRedux<IAppState>) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // console.log(this.redux.getState());
        const token = this.redux.getState().user.token;

        if (!_.isEmpty(token) && !token.isExpired) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${token.asString}`
                }
            });
        }

        return next.handle(request);
    }
}

export const JwtInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: JwtInterceptor,
    multi: true,
    deps: [NgRedux]
};
