import { inject, TestBed }        from '@angular/core/testing';
import { MyRouterService }        from './my-router.service';
import { ActivatedRoute, Router } from "@angular/router";
import { Subject }                from "rxjs/Rx";

class RouterStub {
  url: string;
}

class ActivatedRoutStub {
  private subject = new Subject();

  push(value) {
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

  it('should be created', inject([ MyRouterService ], (service: MyRouterService) => {
    expect(service).toBeTruthy();
  }));
});
