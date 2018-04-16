/**
 * Created by Paweł Grzyb 01.04.2018
 *
 * Ordinary top menu.
 */

import {Component, OnInit} from '@angular/core';
import {MyRouterService} from "../../../../services/my-router.service";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(public myRouter: MyRouterService) {}

  ngOnInit() {}

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
