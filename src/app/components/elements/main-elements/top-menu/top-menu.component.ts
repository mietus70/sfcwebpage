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
  get isScreenMobile(): boolean {
    window.innerWidth;
    return window.innerWidth < 770;
  }

  mobileMenuAnim: string = '';

  constructor(@Inject(WINDOW) private window: Window) {}

  ngOnInit() {}

  /**
   * Animate clicked mobile-menu (hamburger).
   */
  clickMenu(){
    this.mobileMenuAnim = "mobile-menu-icon-anim";
    setTimeout(()=>{
      this.mobileMenuAnim = "";
    }, 1000);
  }
}
