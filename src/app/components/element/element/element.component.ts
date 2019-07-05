/**
 * Created by Pawel Grzyb 01.04.2018
 *
 * The template for an element.
 * Tag <element> - gets a title bar's configuration.
 */

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'element',
  templateUrl: './element.component.html',
  styleUrls: [ './element.component.css' ]
})
export class ElementComponent implements OnInit {

  /**
   * Shows/hides a title bar.
   * @type {boolean}
   */
  @Input()
  is_header: boolean = true;

  constructor() {
  }

  ngOnInit() {
  }

}
