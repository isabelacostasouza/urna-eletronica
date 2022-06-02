import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SubjectizeProps } from 'subjectize';

import { CookiesHandler } from '../utils/cookies-handler';
import { DocumentEditor } from '../utils/document-editor';

import candidates from '../../assets/voting_database.json';

@Component({
  selector: 'voter-login',
  templateUrl: './voter-login.component.html',
  styleUrls: ['./voter-login.component.scss']
})
export class VoterLoginComponent implements OnInit {

  @Input('button_clicked') button_clicked: any;
  @Input('restart_login') restart_login: any;

  @Output() end_voting = new EventEmitter<boolean>();
  @Output() user_logged_in = new EventEmitter<string>();

  @SubjectizeProps(["button_clicked", "restart_login"])
  propObject$ = new ReplaySubject(1);

  action_buttons = candidates["action_buttons"];
  users: { [char: string]: string } = candidates["voters"];

  current_number: any;
  correct_number: boolean = false;
  current_username: any;

  constructor() { }

  ngOnInit(): void {
    this.propObject$.subscribe((changes: any) => {
      setTimeout(() => {
        if(changes[0] == "restart_login") {
          this.correct_number= false;
          this.current_number = undefined;
          this.current_username = undefined;
        } else {
          DocumentEditor.addClassById("invalid-number", "invisible");
          DocumentEditor.addClassById("double-voter", "invisible");

          if(!this.action_buttons.includes(changes[1]) && changes[1] && this.current_number != undefined) this.current_number += changes[1];
          else if(!this.action_buttons.includes(changes[1]) && changes[1]) this.current_number = changes[1];
          else if(changes[1] == this.action_buttons[1]) {
            this.correct_number = false;
            this.current_number = "";
            DocumentEditor.addClassById("confirm-number", "invisible");
          }
          else if(changes[1] == this.action_buttons[2]) this.enterNumber();
          else if(changes[1] == this.action_buttons[0]) this.end_voting.emit(true);
        }
      }, 5);
    });
  }

  enterNumber() {
    if(JSON.parse(CookiesHandler.getCookie("votes"))[this.current_number] && JSON.parse(CookiesHandler.getCookie("votes"))[this.current_number].length == 3) {
      this.current_number = "";
      DocumentEditor.removeClassById("double-voter", "invisible");
    } else if(this.users[this.current_number] != undefined) {
      if(this.correct_number) this.user_logged_in.emit(this.current_number);
      
      this.current_username = this.users[this.current_number];

      DocumentEditor.addClassById("invalid-number", "invisible");
      DocumentEditor.addClassById("double-voter", "invisible");
      DocumentEditor.removeClassById("confirm-number", "invisible");

      this.correct_number = true;
    } else if(this.current_number != undefined) {
      this.current_number = "";
      DocumentEditor.removeClassById("invalid-number", "invisible");
    }
  }

}