import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricePageComponent } from './price-page.component';

describe('CennikPageComponent', () => {
  let component: PricePageComponent;
  let fixture: ComponentFixture<PricePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
