import { ChangeDetectionStrategy, Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ReplaySubject} from "rxjs";
import {Sprinter} from "@athena/shared/data-model";

@Component({
  selector: 'athena-sprint-table',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
    ])
  ],
})
export class SprintComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ["Nachname", "Vorname", "Zeit", "Disqualifiziert"];
  displayedColumns = ["lastName", "name", "time", "disqualified"];

  private $dataStream = new ReplaySubject<Sprinter[]>();

  constructor() {
    this.setData(ELEMENT_DATA);
  }

  private setData(data: Sprinter[]) {
    this.$dataStream.next(data);
  }
}

const ELEMENT_DATA: Sprinter[] = [
  {
    name: "Usain",
    lastName: "Bolt",
    birthday: new Date(1997, 9, 30),
    time: 7,
    disqualified: "Nein",
    stats: {
      gold: 1,
      silver: 2,
      bronze: 3,
      dsq: 1
    },
  },
  {
    name: "Wyomia",
    lastName: "Tyus",
    birthday: new Date(1985, 1, 7),
    time: 9,
    disqualified: "Nein",
    stats: {
        gold: 5,
        silver: 6,
        bronze: 7,
        dsq: 0
    }
  },
  {
    name: "Carl",
    lastName: "Lewis",
    birthday: new Date(1989, 8, 28),
    time: 10,
    disqualified: "Nein",
    stats: {
        gold: 9,
        silver: 10,
        bronze: 11,
        dsq: 0,
    }
  },
  {
    name: "Gail",
    lastName: "Devers",
    birthday: new Date(1989, 8, 28),
    time: 7,
    disqualified: "Nein",
    stats: {
        gold: 9,
        silver: 10,
        bronze: 11,
        dsq: 12,
    }
  },
  {
    name: "Shelly-Ann",
    lastName: "Fraser-Pryce",
    birthday: new Date(1989, 8, 28),
    time: 12,
    disqualified: "Nein",
    stats: {
        gold: 9,
        silver: 10,
        bronze: 11,
        dsq: 0,
    }
  },
  {
    name: "Elaine",
    lastName: "Thompson-Herah",
    birthday: new Date(1989, 8, 28),
    time: 13,
    disqualified: "Nein",
    stats: {
        gold: 9,
        silver: 10,
        bronze: 11,
        dsq: 1,
    }
  }
]
