import {Component, OnInit} from '@angular/core';
import {AthleteService} from 'libs/frontend/services/src/lib/services/athlete.service';

@Component({
  selector: 'athena-fencing',
  templateUrl: './fencing.component.html',
  styleUrls: ['./fencing.component.scss'],
})
export class FencingComponent implements OnInit {
  constructor(public athleteService: AthleteService) {
  }

  ngOnInit(): void {
    this.athleteService.fillFencingTournament();
  }
}
