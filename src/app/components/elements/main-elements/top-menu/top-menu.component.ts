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
  isDarkMode: boolean = false;

  constructor(@Inject(WINDOW) private window: Window) {
    this.initDarkMode();
  }

  /**
   * Initialize dark mode from localStorage or system preference
   */
  private initDarkMode() {
    const stored = this.window.localStorage.getItem('sfc_dark_mode');
    if (stored !== null) {
      this.isDarkMode = stored === 'true';
    } else {
      this.isDarkMode = this.window.matchMedia
        && this.window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    this.applyDarkMode();
  }

  /**
   * Toggle dark mode on/off
   */
  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.window.localStorage.setItem('sfc_dark_mode', String(this.isDarkMode));
    this.applyDarkMode();
  }

  /**
   * Apply dark mode class to html element
   */
  private applyDarkMode() {
    const htmlEl = this.window.document.documentElement;
    if (this.isDarkMode) {
      htmlEl.classList.add('dark');
      htmlEl.classList.remove('light');
    } else {
      htmlEl.classList.remove('dark');
      htmlEl.classList.add('light');
    }
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
