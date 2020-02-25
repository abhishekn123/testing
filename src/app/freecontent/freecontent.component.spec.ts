import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreecontentComponent } from './freecontent.component';

describe('FreecontentComponent', () => {
  let component: FreecontentComponent;
  let fixture: ComponentFixture<FreecontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreecontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
