import { Component, OnInit } from '@angular/core';
import { FeedsService } from 'app/shared/services/feeds/feeds.service';

@Component({
  selector: 'app-private-home',
  templateUrl: './private-home.component.html',
  styleUrls: ['./private-home.component.scss']
})
export class PrivateHomeComponent implements OnInit {

  constructor(private feedService: FeedsService) { }

  ngOnInit() {
    this.getProblemFeeds();
  }

  getProblemFeeds() {
    this.feedService.getProblems().subscribe(x => {
      console.log(x)
    });
  }

}
