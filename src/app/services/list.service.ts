/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * Gets lists from the rest API.
 */

import { Injectable }                  from '@angular/core';
import { HttpClient }                  from "@angular/common/http";
// Models
import { ListElementModel, ListModel } from "../models/list.model";
// Config
import { REST_API_GET_LISTS }          from "../../http.config";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  /**
   * Constructor
   * Gets lists.
   * @param {HttpClient} _httpClient
   */
  constructor(
    private _httpClient: HttpClient
  ) {
    this._getLists();
  }

  /**
   * A data table of the lists.
   * @type {ListElementModel[]}
   * @private
   */
  private _lists: ListModel[] = [];

  /**
   * Gets lists.
   * @return {ListElementModel[]}
   */
  get lists(): ListModel[] {
    return this._lists
  }

  /**
   * Gets lists from the server.
   */
  private _getLists() {
    this._httpClient.get<ListModel[]>(REST_API_GET_LISTS, {withCredentials: false})
        .subscribe((data: ListModel[]) => {
          if (data) {
            this._lists = data;
          }
          else {
            console.log('Error')
          }
        });
  }
}
