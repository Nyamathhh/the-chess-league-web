import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeagueService {
  private baseUrl = 'http://localhost:8080/api/v1/leagues';

  constructor(private http: HttpClient) { }

  getLeagues(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getLeague(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createLeague(league: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, league);
  }
}
