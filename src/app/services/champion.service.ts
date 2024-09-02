import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionService {
  private baseUrl = 'http://localhost:8080/api/v1/champions';

  constructor(private http: HttpClient) { }

  notifyChampion(champion: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/notify`, champion);
  }

  notifyLeagueChampion(leagueId: number, champion: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/leagues/${leagueId}/notify`, champion);
  }

  getChampion(leagueId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/leagues/${leagueId}/champion`);
  }

  getCurrentChampion(): Observable<any> {
    return this.http.get(`${this.baseUrl}/current`);
  }
}
