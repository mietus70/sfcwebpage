import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerClassesComponent } from './banner-classes.component';

describe('BannerClassesComponent', () => {
  let component: BannerClassesComponent;
  let fixture: ComponentFixture<BannerClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
