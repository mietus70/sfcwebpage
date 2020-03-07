/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * The main top-banner in the main page.
 */

import { Component, OnInit } from '@angular/core';
import { MyRouterService }   from "../../../../services/my-router.service";

@Component({
  selector: 'app-banner-header',
  templateUrl: './banner-header.component.html',
  styleUrls: ['./banner-header.component.css']
})
export class BannerHeaderComponent implements OnInit {

  constructor(public myRouterService: MyRouterService) {}

  ngOnInit() {}

}
