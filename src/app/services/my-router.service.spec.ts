import { inject, TestBed }        from '@angular/core/testing';
import { MyRouterService }        from './my-router.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Subject }                from "rxjs/Rx";

class RouterStub {
  url: string = '';
}

class ActivatedRoutStub {
  private subject = new Subject();

  push(value: any) {
    this.subject.next(value);
  }
}

describe('MyRouterService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MyRouterService,
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRoutStub},
      ],
      imports: []
    });
  });

  it('should be created', inject([MyRouterService], (service: MyRouterService) => {
    expect(service).toBeTruthy();
  }));

  it('should be test', inject([MyRouterService, Router], (service: MyRouterService, router: RouterStub) => {
    router.url = 'test';
    expect(service.url).toBe('test')
  }));

  it('should be null', inject([MyRouterService], (service: MyRouterService) => {
    expect(service.url).toBe('')
  }))

});
