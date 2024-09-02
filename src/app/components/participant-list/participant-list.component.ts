import { Component, OnInit } from '@angular/core';
import { ParticipantService } from '../../services/participant.service';

interface Participant {
  name: string;
  email: string;
}

@Component({
  selector: 'app-participants-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.css']
})
export class ParticipantListComponent implements OnInit {
  participants: Participant[] = [];

  constructor(private participantService: ParticipantService) { }

  ngOnInit(): void {
    this.participantService.getParticipants().subscribe(data => {
      this.participants = data;
    });
  }
}
