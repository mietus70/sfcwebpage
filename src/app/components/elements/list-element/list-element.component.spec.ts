import { async, ComponentFixture, TestBed }         from '@angular/core/testing';
import { HttpClientModule }                         from "@angular/common/http";
import { ListElementComponent }                     from './list-element.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { ListService }                              from "../../../services/list.service";

describe('ListElementComponent', () => {
  let component: ListElementComponent;
  let fixture: ComponentFixture<ListElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListElementComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      imports: [ HttpClientModule ],
      providers: [ {
        provide: ListService,
        useValue: {
          lists: []
        }
      }
        ],
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
