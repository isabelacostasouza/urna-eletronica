import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { SubjectizeProps } from 'subjectize';

import { CookiesHandler } from '../utils/cookies-handler';
import { DocumentEditor } from '../utils/document-editor';

import candidates from '../../assets/voting_database.json';

@Component({
  selector: 'cast-vote',
  templateUrl: './cast-vote.component.html',
  styleUrls: ['./cast-vote.component.scss']
})
export class CastVoteComponent implements OnInit {

  @Input('button_clicked') button_clicked: any;
  @Input('user_logged_in') user_logged_in: any;

  @Output() user_voted = new EventEmitter<boolean>();

  @SubjectizeProps(["button_clicked"])
  propObject$ = new ReplaySubject(1);

  action_buttons = candidates["action_buttons"];
  senators: { [char: string]: string } = candidates["senators"];
  presidents: { [char: string]: string } = candidates["presidents"];
  parties: { [char: string]: string } = candidates["parties"];

  current_candidate_img: any;
  current_candidate_part: any;
  current_candidate_name: any;
  senator_voting = Array<String>();
  president_voting = Array<String>();
  voting_number = 0;

  voting_type: string = "";

  votes: any;
  valid_candidate = false;

  constructor() { }

  ngOnInit(): void {
    this.votes = JSON.parse(CookiesHandler.getCookie("votes"));
    
    if(this.votes[this.user_logged_in]) this.voting_number = this.votes[this.user_logged_in].length;

    this.propObject$.subscribe((changes: any) => {
      setTimeout(() => {
        DocumentEditor.addClassById("invalid-number", "invisible");

        if(!this.action_buttons.includes(changes[1]) && changes[1] && this.senator_voting.length < 3 && this.president_voting.length < 2) {
          this.voting_type = "";
          DocumentEditor.addClassById("bottom-content", "invisible");

          if(this.voting_number < 2) {
            this.senator_voting.push(changes[1]);
            if(this.senator_voting.length == 3) {
              if(this.senators[this.senator_voting.join('')] != undefined) {
                this.setSenatorCandidate();
              } else {
                this.voting_type = "null";
                DocumentEditor.removeClassById("bottom-content", "invisible");
              }
            }
          } else {
            this.president_voting.push(changes[1]);
            if(this.president_voting.length == 2) {
              if(this.presidents[this.president_voting.join('')] != undefined) {
                this.setPresidentCandidate();
              } else {
                this.voting_type = "null";
                DocumentEditor.removeClassById("bottom-content", "invisible");
              }
            }
          }
        } else if(changes[1] == this.action_buttons[0]) {
          this.senator_voting = [];
          this.president_voting = [];
          this.voting_type = "white";
          DocumentEditor.removeClassById("bottom-content", "invisible");
        }
        else if(changes[1] == this.action_buttons[1]) {
          this.senator_voting.pop();
          this.president_voting.pop();
          this.valid_candidate = false;
          this.voting_type = "";
          DocumentEditor.addClassById("bottom-content", "invisible");
        }
        else if(changes[1] == this.action_buttons[2]) this.enterVote();
      }, 5);
    });
  }

  setSenatorCandidate() {
    this.current_candidate_part = this.parties[this.senator_voting[0].toString()];
    this.current_candidate_name = this.senators[this.senator_voting.join('')];
    this.current_candidate_img = 'url("../../assets/candidates/' + this.senator_voting.join('') + '.png")';

    this.voting_type = "normal";
    this.valid_candidate = true;
    document.getElementById("bottom-content")?.classList.remove("invisible");

    setTimeout(() => {
      var candidate_photo = document.getElementById("candidate-photo");
      if(candidate_photo) candidate_photo.style.backgroundImage = this.current_candidate_img;
    }, 5);
  }

  setPresidentCandidate() {
    this.current_candidate_part = this.parties[this.president_voting[0].toString()];
    this.current_candidate_name = this.presidents[this.president_voting.join('')];
    this.current_candidate_img = 'url("../../assets/candidates/' + this.president_voting.join('') + '.png")';

    this.voting_type = "normal";
    this.valid_candidate = true;
    DocumentEditor.removeClassById("bottom-content", "invisible");

    setTimeout(() => {
      var candidate_photo = document.getElementById("candidate-photo");
      if(candidate_photo) candidate_photo.style.backgroundImage = this.current_candidate_img;
    }, 5);
  }

  enterVote() {
    if(this.voting_type != "") {
      if(!this.votes[this.user_logged_in]) this.votes[this.user_logged_in] = [];
      if(this.voting_type == "normal") {
        if(this.voting_number == 2) this.votes[this.user_logged_in].push(this.president_voting.join(''));
        else this.votes[this.user_logged_in].push(this.senator_voting.join(''));
      }
      else if(this.voting_type == "white") this.votes[this.user_logged_in].push("white");
      else if(this.voting_type == "null") this.votes[this.user_logged_in].push("null");

      this.voting_number = this.votes[this.user_logged_in].length - 1;

      CookiesHandler.eraseCookie("votes");
      CookiesHandler.setCookie("votes", JSON.stringify(this.votes), 365)

      this.senator_voting = Array<String>();
      DocumentEditor.addClassById("bottom-content", "invisible");

      this.voting_number += 1;
      this.valid_candidate = false;
      this.voting_type = "";
    }

    if(this.voting_number == 3) this.user_voted.emit(true);
  }

}
