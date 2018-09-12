import {Component} from '@angular/core';
import {MyRouterService} from "./services/my-router.service";
import {Router} from "@angular/router";
import {Angulartics2GoogleAnalytics} from 'angulartics2/ga';
import {Angulartics2GoogleGlobalSiteTag} from 'angulartics2/gst';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Konstruktor
   * @param myRouter
   * @param router
   * @param angulartics2GoogleAnalytics
   * @param angulartics2GoogleGlobalSiteTag
   */
  constructor(
    public myRouter: MyRouterService,
    public router: Router,
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics,
    public angulartics2GoogleGlobalSiteTag: Angulartics2GoogleGlobalSiteTag
  ) {}

  /**
   * Funkcja generująca breadcrumb.
   * @param   {number}  element_num
   * @return  {string}
   */
  get_breadcrumb_elements(element_num: number) {
    let link = '';
    this.myRouter.url.split('/').forEach((element: string, index: number) => {
      if (index < element_num) {
        link += element;
        if (index !== element_num - 1) {
          link += '/';
        }
      }
    });
    return link;
  }
}
