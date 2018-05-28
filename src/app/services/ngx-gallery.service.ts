import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {REST_API_GET_GALLERIES} from "../../http.config";
import {GalleriesModel} from "../models/galleries.model";

@Injectable({
  providedIn: 'root'
})
export class NgxGalleryService {
  galleries: GalleriesModel[];

  constructor(
    private _http_client: HttpClient
  ) {
    this._get_galleries()
  }

  private _get_galleries() {
    this._http_client.get<GalleriesModel[]>(REST_API_GET_GALLERIES)
      .subscribe((data: GalleriesModel[]) => {
        this.galleries = data;
      });
  }
}
