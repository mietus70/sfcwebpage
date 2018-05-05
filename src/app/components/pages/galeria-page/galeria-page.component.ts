import { Component, OnInit } from '@angular/core';
import { NgxGalleryOptions, NgxGalleryImage, NgxGalleryAnimation } from 'ngx-gallery';
import 'hammerjs';

@Component({
  selector: 'app-galeria-page',
  templateUrl: './galeria-page.component.html',
  styleUrls: ['./galeria-page.component.css']
})
export class GaleriaPageComponent implements OnInit {
  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor() { }

  ngOnInit() {
    this.galleryOptions = [
      {
        width: '1100px',
        height: '800px',
        thumbnailsColumns: 4,
        thumbnailsRows: 1,
        imageInfinityMove: true,
        imageAnimation: NgxGalleryAnimation.Slide,
        image: true
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/img/galleries/1/20171216_112039.jpg',
        medium: 'assets/img/galleries/1/20171216_112039.jpg',
        big: 'assets/img/galleries/1/20171216_112039.jpg'
      },
      {
        small: 'assets/img/galleries/1/20171216_112043.jpg',
        medium: 'assets/img/galleries/1/20171216_112043.jpg',
        big: 'assets/img/galleries/1/20171216_112043.jpg'
      },
      {
        small: 'assets/img/galleries/1/20171216_113840.jpg',
        medium: 'assets/img/galleries/1/20171216_113840.jpg',
        big: 'assets/img/galleries/1/20171216_113840.jpg'
      },
      {
        small: 'assets/img/galleries/1/20171216_121145.jpg',
        medium: 'assets/img/galleries/1/20171216_121145.jpg',
        big: 'assets/img/galleries/1/20171216_121145.jpg'
      },
      {
        small: 'assets/img/galleries/1/20171228_135916.jpg',
        medium: 'assets/img/galleries/1/20171228_135916.jpg',
        big: 'assets/img/galleries/1/20171228_135916.jpg'
      },
      {
        small: 'assets/img/galleries/1/20171228_135921.jpg',
        medium: 'assets/img/galleries/1/20171228_135921.jpg',
        big: 'assets/img/galleries/1/20171228_135921.jpg'
      }
    ];
  }

}
