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
    return this._listService.lists[this.list_id]
  }

  /**
   * Gets list elements table data.
   * @return {ListElementModel[]}
   */
  get listElements(): ListElementModel[] {
    return this.list.listElements;
  }

  /**
   * Constructor
   * @param {ListService} _listService
   */
  constructor(private _listService: ListService) {}

  ngOnInit() {}

  @Input()
  list_id: number;

}
