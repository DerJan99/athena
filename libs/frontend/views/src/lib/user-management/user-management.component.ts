import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '../../user';

@Component({
  selector: 'athena-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  userData = new MatTableDataSource<User>();
  constructor() {}

  ngOnInit(): void {}
}
