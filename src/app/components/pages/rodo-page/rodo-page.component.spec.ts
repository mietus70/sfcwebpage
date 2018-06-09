import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RodoPageComponent } from './rodo-page.component';

describe('RodoPageComponent', () => {
  let component: RodoPageComponent;
  let fixture: ComponentFixture<RodoPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RodoPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RodoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
