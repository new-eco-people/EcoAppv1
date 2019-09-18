import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'app/shared/routes/app.routes';

@Component({
  selector: 'app-private-profile-head',
  templateUrl: './private-profile-head.component.html',
  styleUrls: ['./private-profile-head.component.scss']
})
export class PrivateProfileHeadComponent implements OnInit {

  // Get the whole routes of the app
  appRoutes = AppRoutes.generateRoutes();

  constructor() { }

  ngOnInit() {
  }

}
