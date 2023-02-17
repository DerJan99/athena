import { Component, OnInit } from '@angular/core';
import { AthleteService } from 'libs/frontend/services/src/lib/services/athlete.service';
import { NgttTournament } from 'ng-tournament-tree';

@Component({
  selector: 'athena-fencing',
  templateUrl: './fencing.component.html',
  styleUrls: ['./fencing.component.scss'],
})
export class FencingComponent implements OnInit {
  constructor(private athleteService: AthleteService) {}

  public fencingTournament: NgttTournament;
  ngOnInit(): void {
    this.athleteService.currentFencingTournament.subscribe((fencTour) => {
      this.fencingTournament = fencTour;
    });
  }
}
