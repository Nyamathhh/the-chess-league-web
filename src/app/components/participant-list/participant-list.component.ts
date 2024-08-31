import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';

@Component({
  selector: 'app-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  participants: any[] = [];

  constructor(private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.participantService.getParticipants().subscribe(data => {
      this.participants = data;
    });
  }
}
