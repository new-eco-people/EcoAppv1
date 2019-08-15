import { Injectable } from '@angular/core';

@Injectable()
export class BaseApiService {
  api: string;

  constructor(document: Document, path: string = null) {
    const filteredPath = path ? '/' + path : '';
    this.api = `${document.location.origin}/api${filteredPath}`;
  }

}
