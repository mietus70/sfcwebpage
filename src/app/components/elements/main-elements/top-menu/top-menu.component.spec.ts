import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick
}                                                   from '@angular/core/testing';
import { TopMenuComponent }                         from './top-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule }                      from "@angular/router/testing";
import { MyRouterService }                          from "../../../../services/my-router.service";
import { WINDOW }                                   from "@ng-toolkit/universal";

describe('TopMenuComponent', () => {
  let component: TopMenuComponent;
  let fixture: ComponentFixture<TopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TopMenuComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{provide: WINDOW}, MyRouterService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    component.moblieMenuAnimLength = 1000;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be null after 1 sec (async)', fakeAsync(() => {
    component.mobileMenuAnim = "";
    component.clickMobileMenu();
    tick(component.moblieMenuAnimLength);
    expect(component.mobileMenuAnim).toBe("")
  }));

  it('should be "mobile-menu-icon-anim" before 1 sec passes', () => {
    component.clickMobileMenu();
    expect(component.mobileMenuAnim).toBe("mobile-menu-icon-anim")
  })
});
