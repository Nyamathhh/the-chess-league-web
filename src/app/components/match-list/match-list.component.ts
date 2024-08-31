import { Component, OnInit } from '@angular/core';
import { MatchService } from '../../services/match.service';

interface Match {
  id: number;
  name: string;
  date: string;
}

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.css']
})
export class MatchListComponent implements OnInit {
  matches: Match[] = [];

  constructor(private matchService: MatchService) { }

  ngOnInit(): void {
    this.matchService.getMatches().subscribe((data: Match[]) => {
      this.matches = data;
    });
  }
}
