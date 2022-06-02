import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SubjectizeProps } from 'subjectize';

import candidates from '../../assets/voting_database.json';

@Component({
  selector: 'finish-voting',
  templateUrl: './finish-voting.component.html',
  styleUrls: ['./finish-voting.component.scss']
})
export class FinishVotingComponent implements OnInit {

  @Input('button_clicked') button_clicked: any;

  @Output() end_session_clicked = new EventEmitter<boolean>();

  @SubjectizeProps(["button_clicked"])
  propObject$ = new ReplaySubject(1);

  action_buttons = candidates["action_buttons"];

  ngOnInit(): void {
      this.propObject$.subscribe((changes: any) => {
        setTimeout(() => {
          if(changes[1] == this.action_buttons[1]) this.end_session_clicked.emit(true);
          else if(changes[1] == this.action_buttons[0]) this.end_session_clicked.emit(false);
        }, 5);
      });
  }

}
