import { Injectable, ChangeDetectorRef } from '@angular/core';

import {MessageService} from 'primeng/api';
// declare let alertify: any;
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  settings = {
    action : 'close',
    config: {
      duration : 20000,
      panelClass: ['bg-light']
    }
  };

  constructor(private toast: MatSnackBar) {
    // alertify.defaults.notifier.delay = 10;
  }

  private addCss(className: string) {
    this.settings.config.panelClass.length = 0;
    this.settings.config.panelClass = ['text-center', className];
  }

  // confirm(message: string, okCallBack: () => any) {
  //   console.log(message);
  // }

  success(message: string) {
    this.addCss('text-success');
    this.toast.open(message, this.settings.action, {...this.settings.config});
  }

  error(message: string) {
    this.addCss('text-danger');
    this.toast.open(message, this.settings.action, {...this.settings.config});
  }

  warning(message: string) {
    // this.addCss('text-warning');
    // this.snackBar.open(message, this.settings.action, {...this.settings.config});
  }

  message(message: string) {
    // console.log(message);
    // this.addCss('text-dark');
    // this.snackBar.open(message, this.settings.action, {...this.settings.config});
  }



}
