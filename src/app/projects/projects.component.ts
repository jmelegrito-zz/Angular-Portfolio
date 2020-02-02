import { Component, OnInit } from '@angular/core';
import { slideLeft, slideUp, slideRight } from '../animations';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
  animations: [
    slideLeft,
    slideUp,
    slideRight
  ]
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
