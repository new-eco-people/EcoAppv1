import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-profile',
  templateUrl: './private-profile.component.html',
  styleUrls: ['./private-profile.component.scss']
})
export class PrivateProfileComponent implements OnInit {


  // Variable Declaration
  currentPage = 'About';

  constructor() { }

    ngOnInit() {
    }

    showPage(page: string) {
        this.currentPage = page;
    }

}
