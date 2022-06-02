import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingResultsComponent } from './voting-results.component';

describe('VotingResultsComponent', () => {
  let component: VotingResultsComponent;
  let fixture: ComponentFixture<VotingResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VotingResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VotingResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort dctionary in descending order', () => {
    let unordered_dict = { "test1": 4, "test2": 2, "test3": 1, "test4": 5, "test5": 3 }
    let ordered_dict = [ [ 'test4', 5 ], [ 'test1', 4 ], [ 'test5', 3 ], [ 'test2', 2 ], [ 'test3', 1 ] ];

    let sorted_dict = component.sortObject(unordered_dict);
    expect(sorted_dict).toEqual(ordered_dict);
  });
});
