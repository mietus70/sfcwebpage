import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CennikPageComponent } from './cennik-page.component';

describe('CennikPageComponent', () => {
  let component: CennikPageComponent;
  let fixture: ComponentFixture<CennikPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CennikPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CennikPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
