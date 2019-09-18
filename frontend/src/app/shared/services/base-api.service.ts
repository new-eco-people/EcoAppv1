import { Injectable } from '@angular/core';
import { AppInjector } from '../state-management/store';

@Injectable()
export class BaseApiService {
  api: string;
  private location: any = AppInjector.location;

  constructor(path: string = null) {
    const hostname = this.location._platformStrategy._platformLocation.location.origin;
    const filteredPath = path ? '/' + path : '';
    this.api = `${hostname}/api${filteredPath}`;
  }

}
