import { Component, OnInit, HostListener } from '@angular/core';
import { AppRoutes } from 'app/shared/routes/app.routes';

@Component({
  selector: 'app-private-home-navbar',
  templateUrl: './private-home-navbar.component.html',
  styleUrls: ['./private-home-navbar.component.scss']
})
export class PrivateHomeNavbarComponent implements OnInit {

  top = true;
  appRoutes = AppRoutes.generateRoutes();

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  scrollHandler() {
    this.top = (window.pageYOffset) > 60 ? false : true;
  }

}
