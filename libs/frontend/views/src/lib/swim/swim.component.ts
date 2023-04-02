import {ChangeDetectionStrategy, Component} from '@angular/core';
import {animate, state, style, transition, trigger,} from '@angular/animations';
import {ReplaySubject} from 'rxjs';
import {Swimmer} from '@athena/shared/data-model';

@Component({
  selector: 'athena-swim-table',
  templateUrl: './swim.component.html',
  styleUrls: ['./swim.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class SwimComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Nachname', 'Vorname', 'Zeit', 'Disqualifiziert'];
  displayedColumns = ['lastName', 'name', 'time', 'disqualified'];

  private $dataStream = new ReplaySubject<Swimmer[]>();

  constructor() {
    this.setData(ELEMENT_DATA);
  }

  private setData(data: Swimmer[]) {
    this.$dataStream.next(data);
  }
}

const ELEMENT_DATA: Swimmer[] = [
  {
    name: 'Michael',
    lastName: 'Phelps',
    birthday: new Date(1997, 9, 30),
    time: 123,
    disqualified: 'Nein',
    stats: {
      gold: 1,
      silver: 2,
      bronze: 3,
      dsq: 1,
    },
  },
  {
    name: 'Paul',
    lastName: 'Biedermann',
    birthday: new Date(1985, 1, 7),
    time: 235,
    disqualified: 'Nein',
    stats: {
      gold: 5,
      silver: 6,
      bronze: 7,
      dsq: 0,
    },
  },
  {
    name: 'Britta',
    lastName: 'Steffen',
    birthday: new Date(1989, 8, 28),
    time: 170,
    disqualified: 'Nein',
    stats: {
      gold: 9,
      silver: 10,
      bronze: 11,
      dsq: 0,
    },
  },
  {
    name: 'Ian',
    lastName: 'Thorpe',
    birthday: new Date(1989, 8, 28),
    time: 200,
    disqualified: 'Nein',
    stats: {
      gold: 9,
      silver: 10,
      bronze: 11,
      dsq: 12,
    },
  },
  {
    name: 'Hannah',
    lastName: 'Stockbauer',
    birthday: new Date(1989, 8, 28),
    time: 250,
    disqualified: 'Nein',
    stats: {
      gold: 9,
      silver: 10,
      bronze: 11,
      dsq: 0,
    },
  },
  {
    name: 'Thomas',
    lastName: 'Lurz',
    birthday: new Date(1989, 8, 28),
    time: 300,
    disqualified: 'Nein',
    stats: {
      gold: 9,
      silver: 10,
      bronze: 11,
      dsq: 1,
    },
  },
];
