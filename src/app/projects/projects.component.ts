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

  projects =  [
    {
      title: "The Game Catalog",
      description: "A web application that uses a JavaScript library (jQuery UI), a CSS framework (Bootstrap), two remote APIs (GiantBomb and Youtube API). Deployed on Firebase.",
      app: "It's a video game catalog where you can see the games for each console for a specific month/year.",
      link: "https://thegamecat-1e92e.web.app/",
      video: "../assets/gamecat.gif",
      logo: "../assets/gamecat.jpg",
      tech: ''
    },
    {
      title: "The Stand App",
      description: "A full-stack web application that uses Express, PostgreSQL, and Sequelize for ORM. It has a PassportJS Local Strategy and incorporates an OAuth Provider (Google OAuth2.o0) with HTML templating (EJS). Finally it was deployed to the cloud (Heroku).",
      app: "It's The Stand Up App! Featuring individual tasks and group tasks for use during daily stand up meetings, our app will assist in getting the conversation flowing in 5 minutes or less. Update and delete tasks easily.",
      link: "https://standapplication.herokuapp.com",
      video: "../assets/standapp.gif",
      logo: "../assets/standapp.png",
      tech:''
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
