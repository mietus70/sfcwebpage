/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * The main top-banner (hero section) with auto-sliding backgrounds.
 */

import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef } from '@angular/core';
import { MyRouterService } from '../../../../services/my-router.service';

@Component({
  selector: 'app-banner-header',
  templateUrl: './banner-header.component.html',
  styleUrls: ['./banner-header.component.css']
})
export class BannerHeaderComponent implements OnInit, AfterViewInit, OnDestroy {

  private slideInterval: any;
  private currentSlide: number = 0;
  private totalSlides: number = 3;

  constructor(
    public myRouterService: MyRouterService,
    private el: ElementRef
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.startSlider();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  /**
   * Start auto-sliding every 5 seconds
   */
  private startSlider() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  /**
   * Advance to next slide with CSS transition
   */
  private nextSlide() {
    const slides = this.el.nativeElement.querySelectorAll('.sfc-hero__slide');
    const dots = this.el.nativeElement.querySelectorAll('.sfc-hero__dot');

    if (slides.length === 0) return;

    // Remove active from current
    slides[this.currentSlide].classList.remove('sfc-hero__slide--active');
    if (dots[this.currentSlide]) {
      dots[this.currentSlide].classList.remove('sfc-hero__dot--active');
    }

    // Move to next
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;

    // Add active to next
    slides[this.currentSlide].classList.add('sfc-hero__slide--active');
    if (dots[this.currentSlide]) {
      dots[this.currentSlide].classList.add('sfc-hero__dot--active');
    }
  }
}
