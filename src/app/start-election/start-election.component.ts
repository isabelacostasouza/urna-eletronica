import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SubjectizeProps } from 'subjectize';

import { CookiesHandler } from '../utils/cookies-handler';

import candidates from '../../assets/voting_database.json';

@Component({
  selector: 'start-election',
  templateUrl: './start-election.component.html',
  styleUrls: ['./start-election.component.scss']
})
export class StartElectionComponent implements OnInit {

  @Input('button_clicked') button_clicked: any;

  @Output() user_authorized = new EventEmitter<boolean>();

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
        document.getElementById("invalid-password")?.classList.add("invisible");
        if(!this.action_buttons.includes(changes[1]) && changes[1]) this.current_password += changes[1];
        else if(changes[1] == this.action_buttons[1]) this.current_password = "";
        else if(changes[1] == this.action_buttons[2]) this.enterPassword();
      }, 5);
    });
  }

  enterPassword() {
    if(this.tse_password == this.current_password) {
      if(!CookiesHandler.getCookie("votes")) {
        var expires = "";
        if (365) {
            var date = new Date();
            date.setTime(date.getTime() + (365*24*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = "votes" + "=" + ("{}" || "")  + expires + "; path=/";
      }
      this.user_authorized.emit(true);
    }
    else {
      this.current_password = "";
      document.getElementById("invalid-password")?.classList.remove("invisible");
    }
  }

}
