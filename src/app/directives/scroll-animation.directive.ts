/**
 * Scroll Animation Directive
 * Adds fade-in animation when element enters the viewport.
 * Uses Intersection Observer API for performance.
 *
 * Usage: <div sfcScrollAnim [delay]="200">content</div>
 */

import { Directive, ElementRef, OnInit, OnDestroy, Input, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';

@Directive({
  selector: '[sfcScrollAnim]'
})
export class ScrollAnimationDirective implements OnInit, OnDestroy {

  @Input() delay: number = 0;
  @Input() animClass: string = 'sfc-animate-fade-up';

  private observer: IntersectionObserver | null = null;

  constructor(
    private el: ElementRef,
    @Inject(WINDOW) private window: Window
  ) {}

  ngOnInit() {
    const element = this.el.nativeElement as HTMLElement;

    // Set initial state
    element.style.opacity = '0';
    element.style.transform = 'translateY(24px)';
    element.style.transition = `opacity 0.6s ease ${this.delay}ms, transform 0.6s ease ${this.delay}ms`;

    // Check if IntersectionObserver is available (SSR safety)
    if (typeof IntersectionObserver === 'undefined') {
      // Fallback: just show the element
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // Animate in
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
            // Stop observing once animated
            if (this.observer) {
              this.observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    this.observer.observe(element);
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
