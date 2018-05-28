import {Component, OnInit} from '@angular/core';

// Services
import {FaqService} from "../../../services/faq.service";

// Models
import {FaqModel} from "../../../models/faq.model";

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {
  /**
   * Gets FAQ table data.
   * @return {FaqModel[]}
   */
  get faqs(): FaqModel[] {
    return this._faqService.faq;
  }

  /**
   * Constructor
   * @param {FaqService} _faqService
   */
  constructor(private _faqService: FaqService) { }

  ngOnInit() {}
}


