import { Component, OnInit } from '@angular/core';

import { CookiesHandler } from '../utils/cookies-handler';

import candidates from '../../assets/voting_database.json';

@Component({
  selector: 'voting-results',
  templateUrl: './voting-results.component.html',
  styleUrls: ['./voting-results.component.scss']
})
export class VotingResultsComponent implements OnInit {
 
  senators: { [char: string]: string } = candidates["senators"];
  presidents: { [char: string]: string } = candidates["presidents"];
  parties: { [char: string]: string } = candidates["parties"];

  total_votes_senator = 0;
  total_votes_president = 0;
  senator_votes: { [char: string]: number } = Object.assign({}, ...Object.keys(this.senators).map((x) => ({[x]: 0})));
  president_votes: { [char: string]: number } = Object.assign({}, ...Object.keys(this.presidents).map((x) => ({[x]: 0})));

  senator_votes_array: any;
  president_votes_array: any;

  ngOnInit(): void {
    var votes = JSON.parse(CookiesHandler.getCookie("votes"));
    var voters = Object.keys(votes);
    for(let i = 0; i < voters.length; i++) {
      let voter_votes = votes[voters[i]];
      if(voter_votes[0] != "white" && voter_votes[0] != "null") this.senator_votes[voter_votes[0]] = this.senator_votes[voter_votes[0]] + 1;
      if(voter_votes[1] != "white" && voter_votes[0] != "null") this.senator_votes[voter_votes[1]] = this.senator_votes[voter_votes[1]] + 1;
      if(voter_votes[2] != "white" && voter_votes[0] != "null") this.president_votes[voter_votes[2]] = this.president_votes[voter_votes[2]] + 1;
    }

    this.total_votes_senator = Object.values(this.senator_votes).reduce((total: any, current: any) => { return total + current; }, 0);
    this.total_votes_president = Object.values(this.president_votes).reduce((total: any, current: any) => { return total + parseInt(current); }, 0);
    
    this.senator_votes_array = this.sortObject(this.senator_votes);
    this.president_votes_array = this.sortObject(this.president_votes);

    CookiesHandler.eraseCookie("votes");
  }

  sortObject(dict: any) {
    var items = Object.keys(dict).map(function(key) {
      return [key, dict[key]];
    });

    items.sort(function(first, second) {
      return second[1] - first[1];
    });

    return items;
  }

}
