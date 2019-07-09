import { Injectable } from '@angular/core';

@Injectable()
export class BaseApiService {
  api: string;

  constructor(document: Document, path: string) {
    this.api = `${document.location.origin}/api/${path}`;
  }

}
