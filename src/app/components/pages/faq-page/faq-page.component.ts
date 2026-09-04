/**
 * FAQ page with accordion.
 */

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {
  openFaq: number = -1;

  ngOnInit() {}

  toggleFaq(index: number) {
    this.openFaq = this.openFaq === index ? -1 : index;
  }
}
