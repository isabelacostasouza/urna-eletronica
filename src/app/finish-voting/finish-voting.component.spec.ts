import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishVotingComponent } from './finish-voting.component';

describe('FinishVotingComponent', () => {
  let component: FinishVotingComponent;
  let fixture: ComponentFixture<FinishVotingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishVotingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishVotingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
