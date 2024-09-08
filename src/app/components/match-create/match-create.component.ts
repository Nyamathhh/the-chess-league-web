import { Component } from '@angular/core';
import { MatchService } from '../../services/match.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-match-create',
  templateUrl: './match-create.component.html',
  styleUrls: ['./match-create.component.css']
})
export class MatchCreateComponent {
  match: any = {};

  constructor(
    private matchService: MatchService,
    private router: Router
  ) { }

  createMatch(): void {
    this.matchService.createMatch(this.match).subscribe(() => {
      console.log(`Navigating to create match`);
      this.router.navigate(['/matches']);
    });
  }
}
