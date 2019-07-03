import { async, ComponentFixture, TestBed }         from '@angular/core/testing';
import { StatutePageComponent }                     from './statute-page.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";

describe('StatutePageComponent', () => {
  let component: StatutePageComponent;
  let fixture: ComponentFixture<StatutePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatutePageComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
