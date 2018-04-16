import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrafikPageComponent } from './grafik-page.component';

describe('GrafikPageComponent', () => {
  let component: GrafikPageComponent;
  let fixture: ComponentFixture<GrafikPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrafikPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrafikPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
