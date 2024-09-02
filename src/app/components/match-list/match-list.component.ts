import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';

interface Match {
  participant1Name: string;
  participant2Name: string;
  winnerName: string;
  leagueName: string;
  matchDate: string;
}

@Component({
  selector: 'app-matches-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  matches: Match[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getMatches().subscribe(data => {
      this.matches = data;
    });
  }
}
