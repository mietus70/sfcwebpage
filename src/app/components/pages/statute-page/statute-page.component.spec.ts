import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatutePageComponent } from './statute-page.component';

describe('StatutePageComponent', () => {
  let component: StatutePageComponent;
  let fixture: ComponentFixture<StatutePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatutePageComponent ]
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
