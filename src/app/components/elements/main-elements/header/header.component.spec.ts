import {async, ComponentFixture, TestBed}         from '@angular/core/testing'
import {HeaderComponent}                          from './header.component'
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core"
import { MyRouterService }                        from "../../../../services/my-router.service";
import { ActivatedRoute, Router }                 from "@angular/router";
import { Subject }                                from "rxjs";

class RouterStub {
  url: string = 'first/second/third';
}

class ActivatedRoutStub {
  private subject = new Subject();

  push(value: any) {
    this.subject.next(value);
  }
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      providers: [
        MyRouterService,
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRoutStub},
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
