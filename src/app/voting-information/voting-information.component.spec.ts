import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingInformationComponent } from './voting-information.component';

describe('VotingInformationComponent', () => {
  let component: VotingInformationComponent;
  let fixture: ComponentFixture<VotingInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
