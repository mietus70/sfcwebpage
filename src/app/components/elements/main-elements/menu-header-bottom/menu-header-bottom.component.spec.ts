import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHeaderBottomComponent } from './menu-header-bottom.component';

describe('MenuHeaderBottomComponent', () => {
  let component: MenuHeaderBottomComponent;
  let fixture: ComponentFixture<MenuHeaderBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuHeaderBottomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuHeaderBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
