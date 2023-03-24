/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AthleteService } from '@athena/frontend/services';
import { Fencer } from '@athena/shared/data-model';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
@Component({
  selector: 'athena-final-table',
  templateUrl: './final-table.component.html',
  styleUrls: ['./final-table.component.scss'],
})
export class FinalTableComponent implements OnInit {
  @Input() data: Fencer[];

  dataSource = new MatTableDataSource<Fencer>();
  selected = 'noch offen';
  displayedColumns: string[] = ['match', 'athleteName', 'result', 'notes'];
  results = ['noch offen', 'gewonnen', 'verloren'];

  constructor(private athleteService: AthleteService) {}

  saveRound(fencer: Fencer, value) {
    console.log(this.athleteService.allFencer.value);
    if (value == 'win') {
      this.athleteService.allFencer.value
        .filter((x) => x.match === fencer.match)
        .find((x) => x.id !== fencer.id).score = 'verloren';
      fencer.score = 'gewonnen';
      document.getElementById(`${fencer.id}`);
      fencer.round = fencer.round + 1;
      if (fencer.match == 0 || fencer.match == 1) {
        fencer.match = 0;
      } else if (fencer.match == 2 || fencer.match == 3) {
        fencer.match = 1;
      } else if (fencer.match == 4 || fencer.match == 5) {
        fencer.match = 2;
      } else {
        fencer.match = 3;
      }
    } else {
      fencer.score = 'verloren';
    }
    this.athleteService.saveNewRound(fencer).subscribe(() => {
      this.athleteService.fillFencingTournament();
    });
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Fencer>(this.data);
  }
}
