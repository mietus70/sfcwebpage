/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * The component shows lists.
 */

import { Component, Input, OnInit } from '@angular/core';
// Services
import { ListService }              from "../../../services/list.service";
// Models
import { ListModel }                from "../../../models/list.model";

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit {

  /**
   * List title
   */
  @Input()
  listTitle: string = "";

  /**
   * Constructor
   * @param {ListService} listService
   */
  constructor(public listService: ListService) {
  }

  /**
   * Compares listTitle from the @Input to the lists from the server and returns
   * valid list.
   * @return {ListModel}
   */
  get list(): ListModel {
    let listTemp: ListModel = new ListModel(0, '', '', []);
    this.listService.lists.forEach((listElement: ListModel) => {
      if (listElement.title == this.listTitle) {
        listTemp = listElement;
      }
    });
    return listTemp;
  }

  ngOnInit() {
  }

}
