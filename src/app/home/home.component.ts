import { Component, OnInit } from '@angular/core';
import { slideLeft, slideUp, slideRight } from '../animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    slideLeft,
    slideUp,
    slideRight
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
