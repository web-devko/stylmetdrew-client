import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UsersComponent } from '../entities/users/users.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, UsersComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

}
