/* Paweł Grzyb 2018
 *
 * Szablon elementów na stronie.
 * tag <element> pobiera poprzez imput ustawienie wyświetlania belki elementu z nazwą.
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

  @Input()
    // Ustawienie wyświetlania belki z tytułem
  is_header: boolean = true;

}
