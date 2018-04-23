import {Component, OnInit} from '@angular/core';

// Services
import {FaqService} from "../../../services/faq.service";

// Models
import {FaqModel} from "../../modals/faq.model";

@Component({
  selector: 'app-faq-page',
  templateUrl: './faq-page.component.html',
  styleUrls: ['./faq-page.component.css']
})
export class FaqPageComponent implements OnInit {
  faq: FaqModel[] = this._faqService.faq;

  constructor(private _faqService: FaqService) { }

  ngOnInit() {
    console.log(this.faq[0].title);
  }
}
