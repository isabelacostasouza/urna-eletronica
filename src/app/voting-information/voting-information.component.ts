import { Component } from '@angular/core';

import candidates from '../../assets/voting_database.json';

@Component({
  selector: 'voting-information',
  templateUrl: './voting-information.component.html',
  styleUrls: ['./voting-information.component.scss']
})
export class VotingInformationComponent {

  senators: { [char: string]: string } = candidates["senators"];
  presidents: { [char: string]: string } = candidates["presidents"];
  parties: { [char: string]: string } = candidates["parties"];
  users: { [char: string]: string } = candidates["voters"];

  senators_keys = Object.keys(this.senators);
  presidents_keys = Object.keys(this.presidents);
  parties_keys = Object.keys(this.parties);
  users_keys = Object.keys(this.users).slice(0, 5);

  user_info = false;

  onClick() {
    this.user_info = !this.user_info;
  }

}
