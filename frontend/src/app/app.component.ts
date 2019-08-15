import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from './shared/state-management/store';
import { UserActionConstant } from './shared/state-management/user-state/user-action-constant';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    constructor(private router: Router, private redux: NgRedux<IAppState>) {
    }

    ngOnInit() {
        // Set authentication token if present
        this.redux.dispatch({type: UserActionConstant.SET_AUTH_USER});

        this.subscription = this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd)
            )
            .subscribe(() => window.scrollTo(0, 0));
    }


    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }



}