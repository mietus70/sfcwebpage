/**
 * Created by Paweł Grzyb 01.04.2018
 *
 * Page element template.
 * Tag <element> - gets config title bar.
 */

import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * Config title bar
   * @type {boolean}
   */
  @Input()
  is_header: boolean = true;

}
