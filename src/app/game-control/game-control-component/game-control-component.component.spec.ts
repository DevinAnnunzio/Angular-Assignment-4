import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameControlComponentComponent } from './game-control-component.component';

describe('GameControlComponentComponent', () => {
  let component: GameControlComponentComponent;
  let fixture: ComponentFixture<GameControlComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameControlComponentComponent]
    });
    fixture = TestBed.createComponent(GameControlComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
