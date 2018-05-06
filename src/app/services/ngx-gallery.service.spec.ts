import { TestBed, inject } from '@angular/core/testing';

import { NgxGalleryService } from './ngx-gallery.service';

describe('NgxGalleryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgxGalleryService]
    });
  });

  it('should be created', inject([NgxGalleryService], (service: NgxGalleryService) => {
    expect(service).toBeTruthy();
  }));
});
