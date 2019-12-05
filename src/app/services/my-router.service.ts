/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * Router's operations.
 */

import { Injectable } from '@angular/core';
import { Router }     from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyRouterService {
  constructor(private _router: Router) {
  }

  /**
   * URL
   * @type {string}
   */
  private _url: string = '';

  /**
   * Gets current url.
   * @return {string}
   */
  get url(): string {
    if (this._router.url) {
      this._url = this._router.url;
      return this._url;
    }
    return ''
  }

  /**
   * Gets string length.
   * @return {number}
   */
  get urlLength(): number {
    if (this.url) {
      return this.url.split('/').length;
    }
    return 0;
  }
}
