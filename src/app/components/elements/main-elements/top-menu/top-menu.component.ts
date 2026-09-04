/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * Main top menu.
 */

import { WINDOW }                    from '@ng-toolkit/universal';
import { Component, Inject, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  mobileMenuAnim: string = '';
  moblieMenuAnimLength: number = 1000;
  isScrolled: boolean = false;
  isMobileMenuOpen: boolean = false;

  constructor(@Inject(WINDOW) private window: Window) {
  }

  /**
   * Check if screen is mobile
   */
  get isScreenMobile(): boolean {
    return this.window.innerWidth < 770;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = this.window.scrollY > 50;
  }

  ngOnInit() {
  }

  /**
   * Toggle mobile menu
   */
  clickMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    this.mobileMenuAnim = "mobile-menu-icon-anim";
    setTimeout(() => {
      this.mobileMenuAnim = "";
    }, this.moblieMenuAnimLength);
  }

  /**
   * Close mobile menu on link click
   */
  closeMobileMenu() {
    this.isMobileMenuOpen = false;
  }
}
