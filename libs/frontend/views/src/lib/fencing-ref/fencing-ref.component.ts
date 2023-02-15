import { Component } from '@angular/core';

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
export class FencingRefComponent {
  selected = 'noch offen';
  displayedColumns: string[] = [
    'match',
    'athleteName',
    'result',
    'notes',
    'athleteManagement',
  ];
  fencingResultSel = [
    {
      value: 'noch offen',
      viewValue: 'noch offen',
    },
    { value: 'gewonnen', viewValue: 'gewonnen' },
    { value: 'verloren', viewValue: 'verloren' },
  ];
  fencingDataSource = FENCINGDATA;
  // editAthlete(athlete: Athlete) {
  //   FENCINGDATA.find();
  // }
}
