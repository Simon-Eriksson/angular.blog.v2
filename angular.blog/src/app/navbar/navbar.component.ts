import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  perspective: string = 'user'; // Starta med user

  constructor(private router: Router) { }

  @Output() switchPerspective = new EventEmitter<string>();

  togglePerspective() {
    if (this.perspective === 'admin') {
      this.router.navigate(['/']); // byte av perspektiv -> home
    }
    this.perspective = this.perspective === 'user' ? 'admin' : 'user';
    this.switchPerspective.emit(this.perspective);
  }

}
