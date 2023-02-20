import { ChangeDetectionStrategy, Component } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ReplaySubject} from "rxjs";
import { JumpRider} from "@athena/shared/data-model";

@Component({
  selector: 'athena-jump-riding-table',
  templateUrl: './jump-riding.component.html',
  styleUrls: ['./jump-riding.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("detailExpand", [
      state("collapsed", style({ height: "0px", minHeight: "0" })),
      state("expanded", style({ height: "*" })),
      transition("expanded <=> collapsed", animate("225ms cubic-bezier(0.4, 0.0, 0.2, 1)"))
    ])
  ],
})
export class JumpRidingComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ["Nachname", "Vorname", "Zeit", "Strafpunkte", "🚫"];
  displayedColumns = ["lastName", "name", "time", "penaltyPoints", "disqualified"];

  private $dataStream = new ReplaySubject<JumpRider[]>();

  constructor() {
    this.setData(ELEMENT_DATA);
  }

  private setData(data: JumpRider[]) {
    this.$dataStream.next(data);
  }
}

const ELEMENT_DATA: JumpRider[] = [
  {
    name: "Ludger",
    lastName: "Beerbaum",
    birthday: new Date(1997, 9, 30),
    time: 45,
    penaltyPoints: 9,
    disqualified: "Nein",
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
    time: 34,
    penaltyPoints: 12,
    disqualified: "Nein",
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
    time: 15,
    penaltyPoints: 4,
    disqualified: "Nein",
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
    time: 5,
    penaltyPoints: 64,
    disqualified: "Nein",
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
    time: 50,
    penaltyPoints: 32,
    disqualified: "Nein",
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
    time: 10,
    penaltyPoints: 2,
    disqualified: "Nein",
    stats: {
        gold: 9,
        silver: 10,
        bronze: 11,
        dsq: 1,
    }
  }
]
