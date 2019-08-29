import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealchildComponent } from './realchild.component';

describe('RealchildComponent', () => {
  let component: RealchildComponent;
  let fixture: ComponentFixture<RealchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
