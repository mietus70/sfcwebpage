/**
 * siłka - Modern Gallery Page
 * Rebuilt without ngx-gallery dependency
 */

import { Component, OnInit, HostListener } from '@angular/core';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

@Component({
  selector: 'app-galeria-page',
  templateUrl: './gallery-page.component.html',
  styleUrls: ['./gallery-page.component.css']
})
export class GalleryPageComponent implements OnInit {

  // All gallery images - mix of hero slides + new silka gallery
  images: GalleryImage[] = [
    { src: 'assets/img/slider/slide_1.jpg', alt: 'Siłownia 24/7 - wnętrze premium', category: 'Siłownia' },
    { src: 'assets/img/slider/slide_2.jpg', alt: 'Zajęcia grupowe kobiet', category: 'Zajęcia grupowe' },
    { src: 'assets/img/slider/slide_3.jpg', alt: 'Boks i MMA - trening', category: 'Boks / MMA' },
    { src: 'assets/img/slider/slide_4.jpg', alt: 'Crossfit i trening funkcjonalny', category: 'Crossfit' },
    { src: 'assets/img/slider/slide_5.jpg', alt: 'Trening personalny', category: 'Personalny' },
    { src: 'assets/img/galleries/silka/gallery-01.jpg', alt: 'Strefa wolnych ciężarów', category: 'Siłownia' },
    { src: 'assets/img/galleries/silka/gallery-02.jpg', alt: 'Strefa boksu', category: 'Boks / MMA' },
    { src: 'assets/img/galleries/silka/gallery-03.jpg', alt: 'Strefa crossfit', category: 'Crossfit' },
    { src: 'assets/img/galleries/silka/gallery-04.jpg', alt: 'Zajęcia grupowe', category: 'Zajęcia grupowe' },
    { src: 'assets/img/galleries/silka/gallery-05.jpg', alt: 'Trening personalny', category: 'Personalny' },
    { src: 'assets/img/galleries/silka/gallery-06.jpg', alt: 'Strefa cardio', category: 'Cardio' },
    { src: 'assets/img/galleries/silka/gallery-07.jpg', alt: 'Trening siłowy kobiet', category: 'Siłownia' },
  ];

  filteredImages: GalleryImage[] = [];
  activeCategory: string = 'Wszystkie';
  categories: string[] = ['Wszystkie', 'Siłownia', 'Boks / MMA', 'Crossfit', 'Zajęcia grupowe', 'Personalny', 'Cardio'];

  // Lightbox
  lightboxOpen = false;
  currentIndex = 0;

  constructor() {}

  ngOnInit() {
    this.filteredImages = [...this.images];
  }

  filterByCategory(cat: string) {
    this.activeCategory = cat;
    if (cat === 'Wszystkie') {
      this.filteredImages = [...this.images];
    } else {
      this.filteredImages = this.images.filter(img => img.category === cat);
    }
  }

  openLightbox(index: number) {
    this.currentIndex = index;
    this.lightboxOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox() {
    this.lightboxOpen = false;
    document.body.style.overflow = '';
  }

  nextImage(event?: Event) {
    if (event) event.stopPropagation();
    this.currentIndex = (this.currentIndex + 1) % this.filteredImages.length;
  }

  prevImage(event?: Event) {
    if (event) event.stopPropagation();
    this.currentIndex = (this.currentIndex - 1 + this.filteredImages.length) % this.filteredImages.length;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent) {
    if (!this.lightboxOpen) return;
    if (event.key === 'Escape') this.closeLightbox();
    if (event.key === 'ArrowRight') this.nextImage();
    if (event.key === 'ArrowLeft') this.prevImage();
  }

  get currentImage(): GalleryImage | null {
    return this.filteredImages[this.currentIndex] || null;
  }
}
