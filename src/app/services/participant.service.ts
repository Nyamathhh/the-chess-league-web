import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {
  private baseUrl = '/api/v1/participants';

  constructor(private http: HttpClient) { }

  getParticipants(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getParticipant(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createParticipant(participant: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, participant);
  }
}
