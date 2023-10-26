import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angular.blog';

  perspective: string = 'user'; // Default perspective is 'user'

  onSwitchPerspective(newPerspective: string) {
    this.perspective = newPerspective;
  }
}
