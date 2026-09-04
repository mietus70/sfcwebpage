/**
 * Created by Pawel Grzyb 01.04.2018
 */

import { Component, HostListener, Inject } from '@angular/core';
import { WINDOW } from '@ng-toolkit/universal';
import { MyRouterService } from './services/my-router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showScrollTop: boolean = false;
  showCookieBanner: boolean = false;

  constructor(
    public myRouterService: MyRouterService,
    @Inject(WINDOW) private window: Window
  ) {
    // Check if cookies were already accepted
    this.showCookieBanner = !this.window.localStorage.getItem('sfc_cookies_accepted');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollTop = this.window.scrollY > 400;
  }

  /**
   * Smooth scroll to top of page
   */
  scrollToTop() {
    this.window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Accept cookies and hide banner
   */
  acceptCookies() {
    this.window.localStorage.setItem('sfc_cookies_accepted', 'true');
    this.showCookieBanner = false;
  }

  /**
   * Generates breadcrumb.
   */
  getBreadcrumbElements(elementNum: number): string {
    let link: string = '';
    if (this.myRouterService) {
      this.myRouterService.url.split('/')
          .forEach((element: string, index: number) => {
            if (index < elementNum) {
              link += element;
              if (index !== elementNum - 1) {
                link += '/';
              }
            }
          });
    }
    return link;
  }
}
