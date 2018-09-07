/**
 * Created by Paweł Grzyb 01.04.2018
 *
 * Ordinary top menu.
 */

import {Component, OnInit} from '@angular/core';

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

  constructor() {}

  ngOnInit() {}

  clickMenu(){
    this.mobileMenuAnim = "mobile-menu-icon-anim";
    setTimeout(()=>{
      this.mobileMenuAnim = "";
    }, 1000);
  }
}
