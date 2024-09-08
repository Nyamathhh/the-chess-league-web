import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchListComponent } from './components/match-list/match-list.component';
import { ParticipantListComponent } from './components/participant-list/participant-list.component';
import { LeagueListComponent } from './components/league-list/league-list.component';
import { ChampionListComponent } from './components/champion-list/champion-list.component';
import { MatchCreateComponent } from './components/match-create/match-create.component';
import { MatchUpdateComponent } from './components/match-update/match-update.component';
import { MatchDeleteComponent } from './components/match-delete/match-delete.component';
import { MatchDetailComponent } from './components/match-detail/match-detail.component';
import { MatchesComponent } from './components/matches/matches.component';



const routes: Routes = [
  { path: '', redirectTo: '/matches', pathMatch: 'full' },
  { path: 'matches', component: MatchesComponent, children: [
    { path: '', component: MatchListComponent }, // Default route: list matches
    { path: 'create', component: MatchCreateComponent },
    { path: 'update/:id', component: MatchUpdateComponent },
    { path: 'delete/:id', component: MatchDeleteComponent },
    { path: 'detail/:id', component: MatchDetailComponent }
  ]},
  { path: 'participants', component: ParticipantListComponent },
  { path: 'leagues', component: LeagueListComponent },
  { path: 'champion', component: ChampionListComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
