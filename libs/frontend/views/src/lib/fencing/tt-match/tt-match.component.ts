/* eslint-disable @typescript-eslint/no-explicit-any */
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'athena-tt-match',
  templateUrl: './tt-match.component.html',
  styleUrls: ['./tt-match.component.scss'],
})
export class TtMatchComponent implements OnInit {
  @Input() match: any;

  ngOnInit() {
  }
}
