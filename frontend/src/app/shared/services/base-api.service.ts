import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class BaseApiService {
  api: string;

  constructor(document: Document, path: string) {
    this.api = `${document.location.origin}/api/${path}`;
  }

}
