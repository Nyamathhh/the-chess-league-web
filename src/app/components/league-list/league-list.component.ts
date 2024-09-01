import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';

@Component({
  selector: 'league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.css']
})
export class LeagueListComponent implements OnInit {
  leagues: any[] = [];

  constructor(private leagueService: LeagueService) { }

  ngOnInit(): void {
    this.leagueService.getLeagues().subscribe(data => {
      this.leagues = data;
    });
  }
}
