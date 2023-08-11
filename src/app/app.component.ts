import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MainComponent } from './main/main.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stylmetdrew-client';
}
