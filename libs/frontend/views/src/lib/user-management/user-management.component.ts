import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '../login/user';

@Component({
  selector: 'athena-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  constructor() {}
  userData = new MatTableDataSource<User>();

  ngOnInit(): void {}
}
