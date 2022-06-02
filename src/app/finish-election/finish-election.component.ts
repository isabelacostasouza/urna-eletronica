import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SubjectizeProps } from 'subjectize';

import { DocumentEditor } from '../utils/document-editor';

import candidates from '../../assets/voting_database.json';

@Component({
  selector: 'finish-election',
  templateUrl: './finish-election.component.html',
  styleUrls: ['./finish-election.component.scss']
})
export class FinishElectionComponent implements OnInit {

  @Input('button_clicked') button_clicked: any;

  @Output() session_ended = new EventEmitter<boolean>();

  @SubjectizeProps(["button_clicked"])
  propObject$ = new ReplaySubject(1);

  current_password: any;
  tse_password = candidates["tse_password"];
  action_buttons = candidates["action_buttons"];

  constructor() { }

  ngOnInit(): void {
    this.current_password = "";

    this.propObject$.subscribe((changes: any) => {
      setTimeout(() => {
        DocumentEditor.addClassById("invalid-password", "invisible");
        
        if(!this.action_buttons.includes(changes[1]) && changes[1]) this.current_password += changes[1];
        else if(changes[1] == this.action_buttons[1]) this.current_password = "";
        else if(changes[1] == this.action_buttons[2]) this.enterPassword();
      }, 5);
    });
  }

  enterPassword() {
    if("0" == this.current_password) this.session_ended.emit(false);
    
    if(this.tse_password == this.current_password) this.session_ended.emit(true);
    else {
      this.current_password = "";
      DocumentEditor.removeClassById("invalid-password", "invisible");
    }
  }

}
