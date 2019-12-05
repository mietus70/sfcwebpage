import { async, ComponentFixture, TestBed }         from '@angular/core/testing';
import { AppComponent }                             from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { MyRouterService }                          from "./services/my-router.service";
import { ActivatedRoute, Router }                   from "@angular/router";
import { Subject }                                  from "rxjs";

class RouterStub {
  url: string = 'first/second/third';
}

class ActivatedRoutStub {
  private subject = new Subject();

  push(value: any) {
    this.subject.next(value);
  }
}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      providers: [
        MyRouterService,
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRoutStub},
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a selector app-header', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-header')).toBeTruthy();
  });

  it('should have a selector app-footer', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-footer')).toBeTruthy();
  });

  it('should have a selector router-outlet', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('router-outlet'));
  });

  it('should return "first/second (generated breadcrumb)"', () => {
    const result = component.getBreadcrumbElements(2);
    expect(result).toEqual('first/second');
  });
});

/*
 *  UNIT TEST
 */
