import { ChangeDetectionStrategy, Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ReplaySubject} from "rxjs";
import {Athlete} from "@athena//shared//data-model";

@Component({
  selector: 'athena-statistic-table',
  templateUrl: './statistic-table.component.html',
  styleUrls: ['./statistic-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
    ])
  ],
})
export class StatisticTableComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ["Nachname", "Vorname", "🥇", "🥈", "🥉", "🚫"];
  displayedColumns = ["lastName", "name", "goldMedal", "silverMedal", "bronzeMedal", "totalMedal", "dsq"];

  private $dataStream = new ReplaySubject<Athlete[]>();

  constructor() {
    this.setData(ELEMENT_DATA);
  }

  private setData(data: Athlete[]) {
    this.$dataStream.next(data);
  }
}

const ELEMENT_DATA: Athlete[] = [
  {
    name: "Max",
    lastName: "Verstappen",
    birthday: new Date(1997, 9, 30),
    stats: {
      gold: 1,
      silver: 2,
      bronze: 3,
      dsq: 4
    },
  },
  {
    name: "Lewis",
    lastName: "Hamilton",
    birthday: new Date(1985, 1, 7),
    stats: {
        gold: 5,
        silver: 6,
        bronze: 7,
        dsq: 8
    }
  },
  {
    name: "Valtteri",
    lastName: "Bottas",
    birthday: new Date(1989, 8, 28),
    stats: {
        gold: 9,
        silver: 10,
        bronze: 11,
        dsq: 12,
    }
  }
]
