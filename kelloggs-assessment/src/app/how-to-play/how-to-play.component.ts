import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-to-play',
  imports: [CommonModule],
  templateUrl: './how-to-play.component.html',
  styleUrl: './how-to-play.component.scss'
})
export class HowToPlayComponent {
  isOpen = true;

  toggleOpen() {
    this.isOpen = !this.isOpen;
  }
}
