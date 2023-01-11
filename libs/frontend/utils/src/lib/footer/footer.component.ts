import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'athena-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent implements OnInit {
  public currentYear: number;

  ngOnInit() {
    this.currentYear = new Date().getFullYear()
  }
}
