import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LeagueListModule } from './components/league-list/league-list.module';
import { ChampionListModule } from './components/champion-list/champion-list.module';
import { MatchListModule } from './components/match-list/match-list.module';
import { ParticipantListModule } from './components/participant-list/participant-list.module';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet, LeagueListModule, ChampionListModule, MatchListModule, ParticipantListModule, CommonModule] 
})
export class AppComponent {
  currentSection: string = 'matches'; 

  navigateTo(section: string) {
    this.currentSection = section;
  }
}

