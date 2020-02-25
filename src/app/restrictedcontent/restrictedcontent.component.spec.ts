import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestrictedcontentComponent } from './restrictedcontent.component';

describe('RestrictedcontentComponent', () => {
  let component: RestrictedcontentComponent;
  let fixture: ComponentFixture<RestrictedcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestrictedcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestrictedcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
