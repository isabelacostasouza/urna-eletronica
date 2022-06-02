import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BallotBoxComponent } from './ballot-box.component';

describe('BallotBoxComponent', () => {
  let component: BallotBoxComponent;
  let fixture: ComponentFixture<BallotBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BallotBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BallotBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change voting step to 1 if user is authorized', () => {
    component.onUserAuthorized(true);
    expect(component.voting_step).toBe(1);
  });

  it('should keep voting step as 0 if user is not authorized', () => {
    component.onUserAuthorized(false);
    expect(component.voting_step).toBe(0);
  });

  it('should change voting step to 2', () => {
    component.onUserLoggedIn(true);
    expect(component.voting_step).toBe(2);
    expect(component.user_logged_in).toBe(true);
    expect(component.restart_login).toBe(true);
  });

  it('should change voting step to 3', () => {
    component.onUserVoted();
    expect(component.voting_step).toBe(3);
  });

  it('should change voting step to 4', () => {
    component.onEndVoting();
    expect(component.voting_step).toBe(4);
    expect(component.restart_login).toBe(true);
  });

  it('should change voting step to 5 if voting has ended', () => {
    component.onVotingEnded(true);
    expect(component.voting_step).toBe(5);
  });
});
