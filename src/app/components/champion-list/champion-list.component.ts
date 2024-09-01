import { Component, OnInit } from '@angular/core';
import { ChampionService } from '../../services/champion.service';

@Component({
  selector: 'champion-list',
  templateUrl: './champion-list.component.html',
  styleUrls: ['./champion-list.component.css']
})
export class ChampionListComponent implements OnInit {
  champions: any[] = [];

  constructor(private championService: ChampionService) { }

  ngOnInit(): void {
    this.championService.getCurrentChampion().subscribe(data => {
      this.champions = [data];
    });
  }
}
