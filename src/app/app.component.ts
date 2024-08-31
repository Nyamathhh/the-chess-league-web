import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import { LeagueListComponent } from './components/league-list/league-list.component';
// import { ChampionListComponent } from './components/champion-list/champion-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet] 
})
export class AppComponent {
  title = 'chess-league-web';
}
