import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeberesComponent } from './deberes.component';

describe('DeberesComponent', () => {
  let component: DeberesComponent;
  let fixture: ComponentFixture<DeberesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeberesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeberesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
