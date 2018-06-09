import {Component} from '@angular/core';
import {MyRouterService} from "./services/my-router.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public myRouter: MyRouterService){}

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
