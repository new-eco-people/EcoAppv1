
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule, HttpClient } from "@angular/common/http";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { 
    PerfectScrollbarModule, 
    PERFECT_SCROLLBAR_CONFIG, 
    PerfectScrollbarConfigInterface
  } from 'ngx-perfect-scrollbar';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";

import { AuthService } from './shared/auth/auth.service';
import { AuthGuard } from './shared/auth/auth-guard.service';
import { SearchPipe } from './shared/pipes/search.pipe';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
    suppressScrollX: true,
    wheelPropagation: false
  };
  
  export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
  }


  @NgModule({
    declarations: [AppComponent, FullLayoutComponent, ContentLayoutComponent, SearchPipe],
    imports: [
      BrowserAnimationsModule,
      AppRoutingModule,
      SharedModule,
      HttpClientModule,
      NgbModule.forRoot(),
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient]
        }
      }),
      PerfectScrollbarModule
    ],
    providers: [
      AuthService,
      AuthGuard,
      {
        provide: PERFECT_SCROLLBAR_CONFIG,
        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
      },
      { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG }
    ],
    bootstrap: [AppComponent]
  })
  export class AppModule {}
  