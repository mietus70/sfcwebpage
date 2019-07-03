import { async, TestBed }                           from '@angular/core/testing';
import { AppComponent }                             from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { RouterTestingModule }                      from "@angular/router/testing";
import { MyRouterService }                          from "./services/my-router.service";
import { Angulartics2, RouterlessTracking }         from "angulartics2";

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [ RouterTestingModule.withRoutes([])],
      providers: [ MyRouterService, RouterlessTracking, {provide: Angulartics2} ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
