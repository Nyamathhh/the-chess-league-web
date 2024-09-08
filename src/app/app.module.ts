import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; 
import { LeagueListModule } from './components/league-list/league-list.module';
import { MatchListModule } from './components/match-list/match-list.module';
import { MatchDetailModule } from './components/match-detail/match-detail.module';
import { MatchUpdateModule } from './components/match-update/match-update.module';
import { MatchDeleteModule } from './components/match-delete/match-delete.module';
import { MatchCreateModule } from './components/match-create/match-create.module';
import { RouterModule } from '@angular/router'; 

import { ParticipantListModule } from './components/participant-list/participant-list.module';
import { ChampionListModule } from './components/champion-list/champion-list.module';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { MatchDeleteComponent } from './components/match-delete/match-delete.component';
import { MatchUpdateComponent } from './components/match-update/match-update.component';
import { MatchCreateComponent } from './components/match-create/match-create.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';

import { ParticipantListComponent } from './components/participant-list/participant-list.component';
import { ChampionListComponent } from './components/champion-list/champion-list.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { MatchesComponent } from './components/matches/matches.component';
import { MatchesModule } from './components/matches/match.module';

@NgModule({
  declarations: [
    AppComponent,
    LeagueListComponent,
    MatchListComponent,
    ParticipantListComponent,
    ChampionListComponent,
    MatchCreateComponent,
    MatchDeleteComponent,
    MatchDetailComponent,
    MatchUpdateComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LeagueListModule,
    MatchListModule,
    MatchCreateModule,
    MatchDeleteModule,  
    MatchDetailModule,
    MatchUpdateModule,
    ParticipantListModule,
    ChampionListModule,
    CommonModule,
    FormsModule,
    RouterModule,
    MatchesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
