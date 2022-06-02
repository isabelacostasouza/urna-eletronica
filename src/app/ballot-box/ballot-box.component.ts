import { Component } from '@angular/core';

@Component({
  selector: 'ballot-box',
  templateUrl: './ballot-box.component.html',
  styleUrls: ['./ballot-box.component.scss']
})
export class BallotBoxComponent {

  button_clicked: any;
  restart_login: any;
  user_logged_in: any;

  voting_step = 0;

  onButtonClicked(outputResult: any) {
    this.button_clicked = undefined;
    setTimeout(() => {
      this.button_clicked = outputResult;      
    }, 5);
  }

  onUserAuthorized(outputResult: any) {
    if(outputResult) this.voting_step = 1;
  }

  onUserLoggedIn(outputResult: any) {
    this.user_logged_in = outputResult;
    this.voting_step = 2;

    this.restart_login = true;
  }

  onEndSession(outputResult: any) {
    if(outputResult == true) this.voting_step = 4;
    else this.voting_step = 1;
  }

  onVotingEnded(outputResult: any) {
    if(outputResult == true) this.voting_step = 5;
    else this.voting_step = 3;
  }

  onUserVoted() {
    this.voting_step = 3;
  }

  onEndVoting() {
    this.voting_step = 4;
    this.restart_login = true;
  }

}
