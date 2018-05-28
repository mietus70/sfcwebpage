import {Component, OnInit} from '@angular/core';
import {NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation} from 'ngx-gallery';
import {NgxGalleryService} from "../../../services/ngx-gallery.service";

@Component({
  selector: 'app-galeria-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  constructor(public ngxGalleryService: NgxGalleryService) {}

  ngOnInit() {
    this.ngxGalleryService.galleries[0].galleryOptions[0].imageAnimation = NgxGalleryAnimation.Slide
  }
}
