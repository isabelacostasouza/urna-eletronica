import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotButtonsComponent } from './ballot-buttons.component';

describe('BallotButtonsComponent', () => {
  let component: BallotButtonsComponent;
  let fixture: ComponentFixture<BallotButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallotButtonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
