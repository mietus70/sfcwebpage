import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

// Models
import {FaqModel} from "../models/faq.model";

// Config
import {REST_API_GET_FAQ} from "../../http.config";

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  /**
   * FAQ data table
   * @type {FaqModel[]}
   * @private
   */
  private _faq: FaqModel[];

  /**
   * Getter FAQ data table
   * @return {FaqModel[]}
   */
  get faq(): FaqModel[] {
    return this._faq
  }

  /**
   * Constructor
   *
   * @param {HttpClient} _http_client
   */
  constructor(
    private _http_client: HttpClient
  ) {
    this._get_faq();
  }

  /**
   * Gets faq from the server.
   * @private
   */
  private _get_faq() {
    this._http_client.get<FaqModel[]>(REST_API_GET_FAQ)
      .subscribe((data: FaqModel[]) => {
        this._faq = data;
      });
  }
}
