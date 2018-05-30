import {TestBed, inject} from '@angular/core/testing';
import {NgxGalleryService} from './ngx-gallery.service';
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('NgxGalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxGalleryService],
      imports: [ HttpClientTestingModule ]
    });
  });

  it('should be created', inject([NgxGalleryService], (service: NgxGalleryService) => {
    expect(service).toBeTruthy();
  }));
});
