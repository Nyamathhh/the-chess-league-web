import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MatchListComponent } from './components/match-list/match-list.component';
import { ParticipantListComponent } from './components/participant-list/participant-list.component';
import { ChampionListComponent } from './components/champion-list/champion-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module'; 
import { LeagueListModule } from './components/league-list/league-list.module';
import { MatchListModule } from './components/match-list/match-list.module';
import { ParticipantListModule } from './components/participant-list/participant-list.module';
import { ChampionListModule } from './components/champion-list/champion-list.module';

@NgModule({
  declarations: [
    AppComponent,
    MatchListComponent,
    ParticipantListComponent,
    ChampionListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    LeagueListModule,
    MatchListModule, 
    ParticipantListModule,
    ChampionListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
