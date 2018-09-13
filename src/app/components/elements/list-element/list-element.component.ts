import {Component, Input, OnInit} from '@angular/core';

// Services
import {ListService} from "../../../services/list.service";

// Models
import {ListElementModel, ListModel} from "../../../models/list.model";

@Component({
  selector: 'app-list-element',
  templateUrl: './list-element.component.html',
  styleUrls: ['./list-element.component.scss']
})
export class ListElementComponent implements OnInit {

  /**
   * Gets list.
   * @return {ListModel}
   */
  get list(): ListModel {
    let list: ListModel = new ListModel(0,'','',[]);
    this._listService.lists.forEach((listElement: ListModel)=>{
      if(listElement.title == this.list_title){
        list = listElement;
      }
    });
    return list;
  }

  /**
   * Gets list elements table data.
   * @return {ListElementModel[]}
   */
  get listElements(): ListElementModel[] {
    return this.list.elements;
  }

  /**
   * Constructor
   * @param {ListService} _listService
   */
  constructor(public _listService: ListService) {}

  ngOnInit() {}

  @Input()
  list_title: string;

}
