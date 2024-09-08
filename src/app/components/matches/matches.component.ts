import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchService } from '../../services/match.service';

interface Match {
  id: number;
  participant1Name: string;
  participant2Name: string;
  winnerName: string;
  leagueName: string;
  matchDate: string;
}

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches: Match[] = [];
  error: string | null = null;

  constructor(private matchService: MatchService, private router: Router) { }

  ngOnInit(): void {
    this.loadMatches();
  }

  loadMatches(): void {
    this.matchService.getMatches().subscribe({
      next: (data: Match[]) => {
        this.matches = data;
      },
      error: (err) => {
        this.error = 'Failed to load matches. Please try again later.';
        console.error('Error loading matches:', err);
      }
    });
  }

  viewMatch(id: number): void {
    this.router.navigate([`/matches/${id}`]);
  }

  // editMatch(id: number): void {
  //   this.router.navigate([`/matches/update/${id}`]);
  // }

  editMatch(id: number): void {
    // Assuming you want to navigate to an edit page, uncomment the line below
    // this.router.navigate([`/matches/update/${id}`]);
  
    if (confirm('Are you sure you want to Edit this match?')) {
      // Fetch the match details before updating
      this.matchService.getMatch(id).subscribe({
        next: (match) => {
          // Proceed to update the match with new values
          const updatedMatch = { ...match, /* modify match details here as needed */ };
          this.matchService.updateMatch(id, updatedMatch).subscribe({
            next: () => {
              // You may want to update the list or navigate to another page
              this.matches = this.matches.map(m => m.id === id ? updatedMatch : m);
            },
            error: (err) => {
              this.error = 'Failed to update match. Please try again later.';
              console.error('Error updating match:', err);
            }
          });
        },
        error: (err) => {
          this.error = 'Failed to fetch match details. Please try again later.';
          console.error('Error fetching match:', err);
        }
      });
    }
  }
  

  deleteMatch(id: number): void {
    if (confirm('Are you sure you want to delete this match?')) {
      this.matchService.deleteMatch(id).subscribe({
        next: () => {
          this.matches = this.matches.filter(match => match.id !== id);
        },
        error: (err) => {
          this.error = 'Failed to delete match. Please try again later.';
          console.error('Error deleting match:', err);
        }
      });
    }
  }

  navigateTo(route: string): void {
    console.log(`Navigating to ${route}`);
    this.router.navigate([route]);
  }
}
