import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'app-match-update',
  templateUrl: './match-update.component.html',
  styleUrls: ['./match-update.component.css']
})
export class MatchUpdateComponent implements OnInit {
  match: any = {};

  constructor(
    private matchService: MatchService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.matchService.getMatch(id).subscribe(data => {
      this.match = data;
    });
  }

  updateMatch(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.matchService.updateMatch(id, this.match).subscribe(() => {
      this.router.navigate(['/matches']);
    });
  }
}
