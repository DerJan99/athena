import { ChangeDetectionStrategy, Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ReplaySubject} from "rxjs";
import { LongJumper} from "@athena/shared/data-model";

@Component({
  selector: 'athena-long-jump-table',
  templateUrl: './long-jump.component.html',
  styleUrls: ['./long-jump.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
    ])
  ],
})
export class LongJumpComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ["Nachname", "Vorname", "Erster Sprung", "Zweiter Sprung","Dritter Sprung", "Anzahl ungültiger Versuche"];
  displayedColumns = ["lastName", "name", "firstrun","secondrun","thirdrun", "disqualifiedruns"];

  private $dataStream = new ReplaySubject<LongJumper[]>();

  constructor() {
    this.setData(ELEMENT_DATA);
  }

  private setData(data: LongJumper[]) {
    this.$dataStream.next(data);
  }
}

const ELEMENT_DATA: LongJumper[] = [
  {
    name: "Ludger",
    lastName: "Beerbaum",
    birthday: new Date(1997, 9, 30),
    firstrun: 560,
    secondrun: 640,
    thirdrun: 0,
    disqualifiedruns: 1,
    stats: {
      gold: 1,
      silver: 2,
      bronze: 3,
      dsq: 1
    },
  },
  {
    name: "Meredith Michaels",
    lastName: "Beerbaum",
    birthday: new Date(1985, 1, 7),
    firstrun: 860,
    secondrun: 640,
    thirdrun: 750,
    disqualifiedruns: 0,
    stats: {
        gold: 5,
        silver: 6,
        bronze: 7,
        dsq: 0
    }
  },
  {
    name: "Daniel",
    lastName: "Deußer",
    birthday: new Date(1989, 8, 28),
    firstrun: 0,
    secondrun: 0,
    thirdrun: 0,
    disqualifiedruns: 3,
    stats: {
        gold: 9,
        silver: 10,
        bronze: 11,
        dsq: 0,
    }
  },
  {
    name: "Hans-Dieter",
    lastName: "Dreher",
    birthday: new Date(1989, 8, 28),
    firstrun: 780,
    secondrun: 340,
    thirdrun: 0,
    disqualifiedruns: 1,
    stats: {
        gold: 9,
        silver: 10,
        bronze: 11,
        dsq: 12,
    }
  },
  {
    name: "Marcus",
    lastName: "Ehning",
    birthday: new Date(1989, 8, 28),
    firstrun: 560,
    secondrun: 640,
    thirdrun: 350,
    disqualifiedruns: 0,
    stats: {
        gold: 9,
        silver: 10,
        bronze: 11,
        dsq: 0,
    }
  },
  {
    name: "Kurt",
    lastName: "Hasse",
    birthday: new Date(1989, 8, 28),
    firstrun: 0,
    secondrun: 0,
    thirdrun: 710,
    disqualifiedruns: 2,
    stats: {
        gold: 9,
        silver: 10,
        bronze: 11,
        dsq: 1,
    }
  }
]
