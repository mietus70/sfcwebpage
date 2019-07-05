/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * The contact page contains address and other information about company.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kontakt-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  /**
   * Coordinates for google map.
   */
  lat: number = 51.546224;
  lng: number = 21.878854;
  zoom: number = 17;

  constructor() {}

  ngOnInit() {
  }

}
