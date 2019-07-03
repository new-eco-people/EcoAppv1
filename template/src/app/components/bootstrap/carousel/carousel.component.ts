import { Component, AfterViewChecked } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { HighlightService } from 'app/shared/services/highlight.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  providers: [NgbCarouselConfig] // add NgbCarouselConfig to the component providers
})

export class CarouselComponent implements AfterViewChecked {

  highlighted: boolean = false;

  constructor(config: NgbCarouselConfig, private highlightService: HighlightService) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.wrap = false;
    config.keyboard = false;
  }

  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }
}
