import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../services/champion.service';
import { CommonModule } from '@angular/common';

interface Champion {
  id: number;
  name: string;
  email: string;
  totalWins: number;
}

@Component({
  selector: 'app-champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})
export class ChampionListComponent implements OnInit {
  currentChampion: Champion | null = null;

  constructor(private championService: ChampionService) { }

  ngOnInit(): void {
    this.championService.getCurrentChampion().subscribe(data => {
      this.currentChampion = data;
    });
  }
}
