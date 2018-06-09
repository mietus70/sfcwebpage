import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

// Models
import {ListElementModel, ListModel} from "../models/list.model";

// Config
import {REST_API_GET_LISTS} from "../../http.config";

@Injectable({
  providedIn: 'root'
})
export class ListService {
  /**
   * FAQ data table
   * @type {ListElementModel[]}
   * @private
   */
  private _lists: ListModel[];

  /**
   * Getter FAQ data table
   * @return {ListElementModel[]}
   */
  get lists(): ListModel[] {
    return this._lists
  }

  /**
   * Constructor
   *
   * @param {HttpClient} _http_client
   */
  constructor(
    private _http_client: HttpClient
  ) {
    this._get_lists();
  }

  /**
   * Gets faq from the server.
   * @private
   */
  private _get_lists() {
    this._http_client.get<ListModel[]>(REST_API_GET_LISTS)
      .subscribe((data: ListModel[]) => {
        this._lists = data;
      });
  }
}
