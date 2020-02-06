import { Component, OnInit } from '@angular/core';
import { slideLeft, slideUp, slideRight, fadeIn } from '../animations';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css'],
  animations: [
    slideLeft,
    slideUp,
    slideRight,
    fadeIn
  ]
})

export class InfoComponent implements OnInit {

 

  constructor() { }

  ngOnInit() {

  }

}
