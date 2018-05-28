import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyRouterService {
  private _url: string;

  /**
   * Getter akutalnego url strony pobierany z router.
   * @return {string}
   */
  get url() {
    if(this._router.url) {
      this._url = this._router.url;
      return this._url;
    }
    return null
  }

  /**
   * Getter długości łańcucha.
   * @return {number}x
   */
    get url_length() {
    if(this.url) {
      return this.url.split('/').length;
    }
    return null;
  }

  constructor(private _router: Router) {}
}
