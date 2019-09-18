import { Component, AfterViewChecked } from '@angular/core';
import { HighlightService } from 'app/shared/services/highlight.service';

@Component({
    selector: 'app-syntax-highlighter',
    templateUrl: './syntax-highlighter.component.html',
    styleUrls: ['./syntax-highlighter.component.scss']
})

export class SyntaxHighlighterComponent implements AfterViewChecked {

    highlighted: boolean = false;

    constructor(private highlightService: HighlightService) { }
  
  
    ngAfterViewChecked() {
      this.highlightService.highlightAll();
    }
}