/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * Main top menu.
 */

import { WINDOW }                    from '@ng-toolkit/universal';
import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  mobileMenuAnim: string = '';
  moblieMenuAnimLength: number = 1000;

  constructor(@Inject(WINDOW) private window: Window) {
  }

  /**
   * Check if screen is mobile
   */
  get isScreenMobile(): boolean {
    window.innerWidth;
    return window.innerWidth < 770;
  }

  ngOnInit() {
  }

  /**
   * Animate clicked mobile-menu (hamburger).
   */
  clickMobileMenu() {
    this.mobileMenuAnim = "mobile-menu-icon-anim";
    setTimeout(() => {
      this.mobileMenuAnim = "";
    }, this.moblieMenuAnimLength);
  }
}
