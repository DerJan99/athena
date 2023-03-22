import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Fencer } from '@athena/shared/data-model';
import { AthleteService } from 'libs/frontend/services/src/lib/services/athlete.service';

import { Athlete } from '../../athlete';

export const FENCINGDATA: Athlete[] = [
  { name: 'Marc', nation: 'Polen', fencingResult: 'noch offen' },
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
  selected = 'noch offen';
  displayedColumns: string[] = [
    'match',
    'athleteName',
    'result',
    'notes',
    'athleteManagement',
  ];
  fencingDataSource = new MatTableDataSource<Fencer>();
  results = ['noch offen', 'gewonnen', 'verloren'];

  constructor(private athleteService: AthleteService) {}

  ngOnInit() {
    this.athleteService.allFencer.subscribe((fencer) => {
      this.fencingDataSource = new MatTableDataSource<Fencer>(fencer);
    });
  }

  saveRound(fencer: Fencer, value) {
    fencer.round = 1;
    fencer.match = 1;
    if (value == 'gewonnen') {
      fencer.score = 1;
    } else {
      fencer.score = 0;
    }

    this.athleteService.saveNewRound(fencer).subscribe();
  }
}
