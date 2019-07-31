import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppRoutes } from '../routes/app.routes';

 @Injectable()

 export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(

            catchError((error) => {
                // console.log(error)


                if (error instanceof HttpErrorResponse) {

                    if (error.status === 424) {

                        this.router.navigate([AppRoutes.public.sendEmailVerification.fullPath])

                        return throwError(error);
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
