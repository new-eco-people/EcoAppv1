import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppRoutes } from '../routes/app.routes';
import { UserActionConstant } from '../state-management/user-state/user-action-constant';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from '../state-management/store';

 @Injectable()

 export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router, private redux: NgRedux<IAppState>) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(

            catchError((error) => {
                // console.log(error)


                if (error instanceof HttpErrorResponse) {

                    if (error.status === 424) {

                        this.router.navigate([AppRoutes.public.sendEmailVerification.path])

                        return throwError(error);
                    }

                    if (error.status === 401) {

                        this.redux.dispatch({ type: UserActionConstant.LOG_OUT });

                        this.router.navigate(['public/signin'], {
                            queryParams : {
                            returnUrl : this.router.url
                            }
                        });

                        return throwError('Login required');

                    }

                }

                return throwError(error);
            })

        )
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
};
