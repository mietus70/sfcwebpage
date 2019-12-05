import {TestBed, inject} from '@angular/core/testing';
import {ListService} from './list.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('ListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([ListService], (service: ListService) => {
    expect(service).toBeTruthy();
  }));

});
