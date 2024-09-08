import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeagueListModule } from './components/league-list/league-list.module';
import { ChampionListModule } from './components/champion-list/champion-list.module';
import { MatchListModule } from './components/match-list/match-list.module';
import { MatchDetailModule } from './components/match-detail/match-detail.module';
import { MatchCreateModule } from './components/match-create/match-create.module';
import { MatchUpdateModule } from './components/match-update/match-update.module';
import { MatchDeleteModule } from './components/match-delete/match-delete.module';
import { MatchesModule } from './components/matches/match.module';
import { RouterModule } from '@angular/router';

import { ParticipantListModule } from './components/participant-list/participant-list.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, LeagueListModule, ChampionListModule, MatchListModule, 
    ParticipantListModule, CommonModule, FormsModule, MatchCreateModule, MatchDetailModule, MatchUpdateModule,
     MatchDeleteModule, MatchesModule, RouterOutlet, RouterModule] 
})
export class AppComponent {
  constructor(private router: Router) { }

  navigateTo(section: string): void {
    this.router.navigate([section]);
  }
}
