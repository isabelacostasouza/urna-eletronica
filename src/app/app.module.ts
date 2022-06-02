import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartElectionComponent } from './start-election/start-election.component';
import { FinishVotingComponent } from './finish-voting/finish-voting.component';
import { BallotBoxComponent } from './ballot-box/ballot-box.component';
import { BallotButtonsComponent } from './ballot-buttons/ballot-buttons.component';
import { CastVoteComponent } from './cast-vote/cast-vote.component';
import { FinishElectionComponent } from './finish-election/finish-election.component';
import { FormsModule } from '@angular/forms';
import { VoterLoginComponent } from './voter-login/voter-login.component';
import { VotingResultsComponent } from './voting-results/voting-results.component';
import { VotingInformationComponent } from './voting-information/voting-information.component';

@NgModule({
  declarations: [
    AppComponent,
    StartElectionComponent,
    FinishVotingComponent,
    BallotBoxComponent,
    BallotButtonsComponent,
    CastVoteComponent,
    FinishElectionComponent,
    VoterLoginComponent,
    VotingResultsComponent,
    VotingInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
