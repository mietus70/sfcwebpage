/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * Page header.
 */

import { Component, OnInit } from '@angular/core';
import { MyRouterService }   from "../../../../services/my-router.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public myRouterService: MyRouterService
  ) {
  }

  ngOnInit() {
  }

}
