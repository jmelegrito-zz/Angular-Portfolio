import { Component, Input } from '@angular/core';
import { slideLeft, slideUp, slideRight, fadeIn } from './animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    slideLeft,
    slideUp,
    slideRight,
    fadeIn
  ]
})
export class AppComponent {
  section : string = "Home"

  setSection(e) {
    this.section = e
  }

}
