import { Component, OnInit } from '@angular/core';
import { slideLeft, slideUp, slideRight } from '../animations';

@Component({
  selector: 'app-experience',
  templateUrl: './Experience.component.html',
  styleUrls: ['./Experience.component.css'],
  animations: [
    slideLeft,
    slideUp,
    slideRight
  ]
})
export class ExperienceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
