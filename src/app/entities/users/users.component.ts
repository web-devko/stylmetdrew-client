import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private service: UsersService) { }

  ngOnInit(): void {
    this.service.getUsers().subscribe((resp) => {
      console.log(resp);
    })
  }
}
