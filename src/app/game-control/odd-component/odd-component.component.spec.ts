import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OddComponentComponent } from './odd-component.component';

describe('OddComponentComponent', () => {
  let component: OddComponentComponent;
  let fixture: ComponentFixture<OddComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OddComponentComponent]
    });
    fixture = TestBed.createComponent(OddComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
