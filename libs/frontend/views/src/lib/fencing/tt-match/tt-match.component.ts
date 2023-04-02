import { Component, Input } from '@angular/core';

@Component({
  selector: 'athena-tt-match',
  templateUrl: './tt-match.component.html',
  styleUrls: ['./tt-match.component.scss'],
})
export class TtMatchComponent {
  @Input() match: any;
}
