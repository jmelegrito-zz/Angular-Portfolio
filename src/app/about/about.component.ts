import { Component, OnInit } from '@angular/core';
import { slideLeft, slideUp, slideRight, fadeIn } from '../animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    slideLeft,
    slideUp,
    slideRight,
    fadeIn
  ]
})

export class AboutComponent implements OnInit {

 

  constructor() { }

  ngOnInit() {

  }

}
