import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {NewsComponent} from './news.component';
import {CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from "@angular/core";

describe('NewsComponent', () => {
  let component: NewsComponent;
  let fixture: ComponentFixture<NewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should has class "element-content', () => {
    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.element-content')).toBeTruthy();
  });


  it('should has class "element-title', () => {
    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.element-title')).toBeTruthy();
  });

  it('should render title in a element-title class', () => {
    let compiled = fixture.debugElement.nativeElement;

    fixture.detectChanges();

    expect(compiled.querySelector('.element-title').textContent).toContain('News');
  });
});
