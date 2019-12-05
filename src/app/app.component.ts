/**
 * Created by Pawel Grzyb 01.04.2018
 */

import { Component }       from '@angular/core';
import { MyRouterService } from "./services/my-router.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Constructor
   * @param myRouterService
   */
  constructor(
    public myRouterService: MyRouterService,
  ) {
  }

  /**
   * Generates breadcrumb.
   * @param   {number}  elementNum
   * @return  {string}
   */
  getBreadcrumbElements(elementNum: number): string {
    let link: string = '';
    if (this.myRouterService) {
      this.myRouterService.url.split('/')
          .forEach((element: string, index: number) => {
            if (index < elementNum) {
              link += element;
              if (index !== elementNum - 1) {
                link += '/';
              }
            }
          });
    }
    return link;
  }
}
