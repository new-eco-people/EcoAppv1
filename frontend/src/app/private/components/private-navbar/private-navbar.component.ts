import { Component, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from 'app/shared/services/layout.service';
import { ConfigService } from 'app/shared/services/config.service';
import { Router } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { IAppState } from 'app/shared/state-management/store';
import { UserActionConstant } from 'app/shared/state-management/user-state/user-action-constant';
import { AppRoutes } from 'app/shared/routes/app.routes';

@Component({
  selector: 'app-private-navbar',
  templateUrl: './private-navbar.component.html',
  styleUrls: ['./private-navbar.component.scss']
})
export class PrivateNavbarComponent implements OnInit, AfterViewInit {
  currentLang = 'en';
  toggleClass = 'ft-maximize';
  placement = 'bottom-right';
  public isCollapsed = true;
  @Output()
  toggleHideSidebar = new EventEmitter<Object>();

  public config: any = {};

  appRoutes = AppRoutes.generateRoutes();

  constructor(
    public translate: TranslateService,
    private layoutService: LayoutService,
    private configService: ConfigService,
    private router: Router,
    private redux: NgRedux<IAppState>
    ) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');

  }

  ngOnInit() {
    this.config = this.configService.templateConf;
  }

  ngAfterViewInit() {
    if(this.config.layout.dir) {
      const dir = this.config.layout.dir;
        if (dir === 'rtl') {
          this.placement = 'bottom-left';
        } else if (dir === 'ltr') {
          this.placement = 'bottom-right';
        }
    }
  }


  ChangeLanguage(language: string) {
    this.translate.use(language);
  }

  // for full screen
  ToggleClass() {
    if (this.toggleClass === 'ft-maximize') {
      this.toggleClass = 'ft-minimize';
    } else {
      this.toggleClass = 'ft-maximize';
    }
  }

  toggleNotificationSidebar() {
    this.layoutService.emitChange(true);
  }

  toggleSidebar() {
    const appSidebar = document.getElementsByClassName('app-sidebar')[0];
    if (appSidebar.classList.contains('hide-sidebar')) {
      this.toggleHideSidebar.emit(false);
    } else {
      this.toggleHideSidebar.emit(true);
    }
  }

  logout() {
    this.redux.dispatch({ type: UserActionConstant.LOG_OUT  });
    this.router.navigate([this.appRoutes.public.signIn.path]);
  }
}
