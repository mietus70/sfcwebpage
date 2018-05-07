import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {TopMenuComponent} from './top-menu.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";
import {RouterLinkWithHref} from "@angular/router";
import {RouterTestingModule} from "@angular/router/testing";
import {MyRouterService} from "../../../../services/my-router.service";

describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopMenuComponent],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
      imports: [ RouterTestingModule.withRoutes([]) ],
      providers: [MyRouterService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
