
import { HttpClient } from '@angular/common/http';
import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PerfectScrollbarConfigInterface, PerfectScrollbarModule, PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchPipe } from './shared/pipes/search.pipe';
import { AuthGuard } from './shared/services/auth/auth-guard.service';
import { SharedModule } from './shared/shared.module';
import { IAppState, INITIAL_STATE, rootReducer, AppInjector } from './shared/state-management/store';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { Location } from '@angular/common';


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
  };

  export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  }


  @NgModule({
    declarations: [
      AppComponent,
      SearchPipe,
      ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      AppRoutingModule,
      SharedModule,
      NgReduxModule,
      NgbModule.forRoot(),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      }),
      PerfectScrollbarModule,
    ],
    providers: [
      AuthGuard,
      {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      },
      { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {
    constructor(private injector: Injector, ngRedux: NgRedux<IAppState>) {
      AppInjector.location = injector.get<Location>(Location);
      ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
  }
