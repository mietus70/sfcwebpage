import {TestBed, inject} from '@angular/core/testing';
import {FaqService} from './faq.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FaqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaqService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([FaqService], (service: FaqService) => {
    expect(service).toBeTruthy();
  }));
});
