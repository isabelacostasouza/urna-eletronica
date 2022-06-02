import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishElectionComponent } from './finish-election.component';

describe('FinishElectionComponent', () => {
  let component: FinishElectionComponent;
  let fixture: ComponentFixture<FinishElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishElectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
