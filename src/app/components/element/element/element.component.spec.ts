import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ElementComponent} from './element.component';

describe('ElementComponent', () => {
  let component: ElementComponent;
  let fixture: ComponentFixture<ElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementComponent ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render h4 tag if is_header is true', () => {
    let compiled = fixture.debugElement.nativeElement;
    component.is_header = true;

    fixture.detectChanges();

    expect(compiled.querySelector('h4')).toBeTruthy();
  });

  it('should not render h4 tag if is_header is false', () => {
    let compiled = fixture.debugElement.nativeElement;
    component.is_header = false;

    fixture.detectChanges();

    expect(compiled.querySelector('h4')).toBeFalsy();
  });

  it('should has class "nk-gap-1', () => {
    let compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.nk-gap-1')).toBeTruthy();
  });
});
