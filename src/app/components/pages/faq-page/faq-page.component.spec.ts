import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {FaqPageComponent} from './faq-page.component';
import {ListService} from "../../../services/list.service";
import {HttpClientTestingModule} from "@angular/common/http/testing";

describe('FaqPageComponent', () => {
  let component: FaqPageComponent;
  let fixture: ComponentFixture<FaqPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqPageComponent ],
      providers: [ ListService ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
