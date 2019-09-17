import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'app/shared/routes/app.routes';

@Component({
  selector: 'app-private-home-topnavbar',
  templateUrl: './private-home-topnavbar.component.html',
  styleUrls: ['./private-home-topnavbar.component.scss']
})
export class PrivateHomeTopnavbarComponent implements OnInit {

  appRoutes = AppRoutes.generateRoutes();
  mobile = true;

  constructor() { }

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    this.mobile = (window.innerWidth > 991) ? false : true;
  }

}
