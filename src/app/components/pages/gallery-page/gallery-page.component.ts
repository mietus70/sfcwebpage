/**
 * Created by Pawel Grzyb 01.04.2018
 *
 *  Galleries.
 */

import { Component, OnInit } from '@angular/core';
import { NgxGalleryService } from "../../../services/ngx-gallery.service";

@Component({
  selector: 'app-galeria-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: [ './gallery-page.component.css' ]
})
export class GalleryPageComponent implements OnInit {

  constructor(public ngxGalleryService: NgxGalleryService) {
  }

  ngOnInit() {
  }
}
