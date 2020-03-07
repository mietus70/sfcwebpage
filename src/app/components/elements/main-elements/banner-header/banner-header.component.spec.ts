import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BannerHeaderComponent }            from './banner-header.component';
import { MyRouterService }                  from "../../../../services/my-router.service";
import { ActivatedRoute, Router }           from "@angular/router";
import { Subject }                          from "rxjs";


class RouterStub {
}

class ActivatedRoutStub {
  private subject = new Subject();

  push(value: any) {
    this.subject.next(value);
  }
}

describe('BannerHeaderComponent', () => {
  let component: BannerHeaderComponent;
  let fixture: ComponentFixture<BannerHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BannerHeaderComponent],
      providers: [
        MyRouterService,
        {provide: Router, useClass: RouterStub},
        {provide: ActivatedRoute, useClass: ActivatedRoutStub},
      ]
    })
           .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
