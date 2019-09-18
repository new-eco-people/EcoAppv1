import { Component, OnInit, ElementRef, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayoutService } from 'app/shared/services/layout.service';

@Component({
  selector: 'app-private-notification-sidebar',
  templateUrl: './private-notification-sidebar.component.html',
  styleUrls: ['./private-notification-sidebar.component.scss']
})
export class PrivateNotificationSidebarComponent implements OnInit, OnDestroy {

  layoutSub: Subscription;
  isOpen = false;

  @ViewChild('sidebar') sidebar: ElementRef;

  ngOnInit() {
  }

  constructor(private elRef: ElementRef,
    private renderer: Renderer2,
    private layoutService: LayoutService) {

    this.layoutSub = layoutService.changeEmitted$.subscribe(
      value => {
        if (this.isOpen) {
          this.renderer.removeClass(this.sidebar.nativeElement, 'open');
          this.isOpen = false;
        }
        else {
          this.renderer.addClass(this.sidebar.nativeElement, 'open');
          this.isOpen = true;
        }
      });
  }

  ngOnDestroy() {
    if(this.layoutSub) {
      this.layoutSub.unsubscribe();
    }
  }


  onClose() {
    this.renderer.removeClass(this.sidebar.nativeElement, 'open');
    this.isOpen = false;
  }

}
