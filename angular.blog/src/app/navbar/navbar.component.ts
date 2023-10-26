import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  perspective: string = 'user'; // Start with the user perspective
  @Output() switchPerspective = new EventEmitter<string>();

  togglePerspective() {
    this.perspective = this.perspective === 'user' ? 'admin' : 'user';
    this.switchPerspective.emit(this.perspective);
  }
}
