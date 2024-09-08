import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match-delete',
  templateUrl: './match-delete.component.html',
  styleUrls: ['./match-delete.component.css']
})
export class MatchDeleteComponent {
  constructor(private matchService: MatchService, private router: Router) { }

  deleteMatch(): void {
    this.matchService.deleteMatch(1) 
      .subscribe(() => {
        this.router.navigate(['/matches']); 
      });
  }

  cancel(): void {
    this.router.navigate(['/matches']);
  }
}
