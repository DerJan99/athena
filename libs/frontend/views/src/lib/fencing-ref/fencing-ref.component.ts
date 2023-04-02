import {Component, OnInit} from '@angular/core';
import {Fencer} from '@athena/shared/data-model';
import {AthleteService} from 'libs/frontend/services/src/lib/services/athlete.service';

import {Athlete} from '../../athlete';

export const FENCINGDATA: Athlete[] = [
  {name: 'Marc', nation: 'Polen', fencingResult: 'noch offen'},
  {
    name: 'Jan',
    nation: 'von Sondern',
    fencingResult: 'noch offen',
  },
];

@Component({
  selector: 'athena-fencing-ref',
  templateUrl: './fencing-ref.component.html',
  styleUrls: ['./fencing-ref.component.scss'],
})
export class FencingRefComponent implements OnInit {
  fencingDataSource1: Fencer[];
  fencingDataSource2: Fencer[];
  fencingDataSource3: Fencer[];
  fencingDataSource4: Fencer[];

  constructor(private athleteService: AthleteService) {
  }

  ngOnInit() {
    this.athleteService.allFencer.subscribe((fencer) => {
      this.fencingDataSource1 = fencer;
    });
    this.athleteService.viertelFinale.subscribe((fencer) => {
      this.fencingDataSource2 = fencer;
    });
    this.athleteService.halbFinale.subscribe((fencer) => {
      this.fencingDataSource3 = fencer;
    });
    this.athleteService.finale.subscribe((fencer) => {
      this.fencingDataSource4 = fencer;
    });
  }
}
