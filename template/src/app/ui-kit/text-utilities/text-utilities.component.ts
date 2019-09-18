import { Component, AfterViewChecked } from '@angular/core';
import { HighlightService } from 'app/shared/services/highlight.service';

@Component({
    selector: 'app-text-utilities',
    templateUrl: './text-utilities.component.html',
    styleUrls: ['./text-utilities.component.scss']
})

export class TextUtilitiesComponent implements AfterViewChecked {

    highlighted: boolean = false;

    constructor(private highlightService: HighlightService) { }
  
  
    ngAfterViewChecked() {
      this.highlightService.highlightAll();
    }
}