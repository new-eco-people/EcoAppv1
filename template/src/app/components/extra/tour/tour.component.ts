import { Component, OnDestroy, AfterViewChecked } from '@angular/core';
import * as hopscotch from 'hopscotch';
import { HighlightService } from 'app/shared/services/highlight.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.scss']
})
export class TourComponent implements AfterViewChecked, OnDestroy {

  highlighted: boolean = false;

  constructor(private highlightService: HighlightService) { }


  ngAfterViewChecked() {
    this.highlightService.highlightAll();
  }

  ngOnDestroy() {
    // Destroy running tour
    hopscotch.endTour(true);
  }

  startTour() {
    // Destroy running tour
    hopscotch.endTour(true);
    // Initialize new tour 
    hopscotch.startTour(this.tourSteps());
  }

  tourSteps(): any {
    return {
      id: 'demo-tour',
      showPrevButton: true,
      steps: [

        {
          title: "Full Screen",
          content: "View this page in full screen mode.",
          target: "navbar-fullscreen",
          placement: "left"
        },
        {
          title: "Pixinvent",
          content: "Check this link to know more about Pixinvent.",
          target: "pixinventLink",
          placement: "top"
        },
        {
          title: "Customizer",
          content: "This is the customizer for the theme where you can customize menu options.",
          target: "customizer-toggle-icon",
          placement: "left"
        }
      ]
    }
  }
}
