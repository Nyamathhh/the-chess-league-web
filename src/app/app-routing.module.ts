import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchListComponent } from './components/match-list/match-list.component';
import { ParticipantListComponent } from './components/participant-list/participant-list.component';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { ChampionListComponent } from './components/champion-list/champion-list.component';

const routes: Routes = [
  { path: 'matches', component: MatchListComponent },
  { path: 'participants', component: ParticipantListComponent },
  { path: 'leagues', component: LeagueListComponent },
  { path: 'champions', component: ChampionListComponent },
  { path: '', redirectTo: '/matches', pathMatch: 'full' },  // Default route
  { path: '**', redirectTo: '/matches' }  // Wildcard route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
