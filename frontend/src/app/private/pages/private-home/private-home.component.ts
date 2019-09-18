import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { FeedsService } from 'app/shared/services/feeds/feeds.service';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.scss']
})
export class PrivateHomeComponent implements OnInit {

  top = true;

  constructor(private feedService: FeedsService) { }

  ngOnInit() {
    this.getProblemFeeds();
  }

  getProblemFeeds() {
    this.feedService.getProblems().subscribe(x => {
      console.log(x)
    });
  }


  @HostListener('window:scroll', ['$event'])
    scrollHandler(event) {
      this.top = (window.pageYOffset) > 60 ? false : true;
    }

}
