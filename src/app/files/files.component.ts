import { Component, OnInit } from '@angular/core';
import { slideLeft, slideUp, slideRight } from '../animations';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
  animations: [
    slideLeft,
    slideUp,
    slideRight
  ]
})
export class FilesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
