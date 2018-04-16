/**
 * Created by Paweł Grzyb 01.04.2018
 *
 * Ordinary top menu.
 */

import {Component, OnInit} from '@angular/core';
import {MyRouterService} from "../../../../services/my-router.service";

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {

  constructor(public myRouter: MyRouterService) {}

  ngOnInit() {}

}
