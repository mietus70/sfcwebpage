import { WINDOW }                    from '@ng-toolkit/universal';
import { Component, Inject, OnInit } from '@angular/core';

/**
 * Created by Paweł Grzyb 01.04.2018
 *
 * Ordinary top menu.
 */

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
   * Animate clicked menu.
   */
  clickMenu(){
    this.mobileMenuAnim = "mobile-menu-icon-anim";
    setTimeout(()=>{
      this.mobileMenuAnim = "";
    }, 1000);
  }
}
