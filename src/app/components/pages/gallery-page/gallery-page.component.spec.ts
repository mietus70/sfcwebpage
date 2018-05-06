import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GaleriaPageComponent } from './gallery-page.component';

describe('GaleriaPageComponent', () => {
  let component: GaleriaPageComponent;
  let fixture: ComponentFixture<GaleriaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GaleriaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GaleriaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
