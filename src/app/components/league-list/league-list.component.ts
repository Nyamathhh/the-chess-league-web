import { Component, OnInit } from '@angular/core';
import { LeagueService } from '../../services/league.service';

interface League {
  name: string;
}

@Component({
  selector: 'app-leagues-list',
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


