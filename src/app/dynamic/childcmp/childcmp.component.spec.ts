import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildcmpComponent } from './childcmp.component';

describe('ChildcmpComponent', () => {
  let component: ChildcmpComponent;
  let fixture: ComponentFixture<ChildcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
