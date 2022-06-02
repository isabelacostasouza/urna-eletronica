import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartElectionComponent } from './start-election.component';

describe('StartElectionComponent', () => {
  let component: StartElectionComponent;
  let fixture: ComponentFixture<StartElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartElectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StartElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
