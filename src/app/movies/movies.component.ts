import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  movies = [
    {
      id : 1,
      language : "Telugu",
      name : "Kaala",
      genere : "Action"
    },
    {
      id: 2,
      language : "Telugu",
      name : "Nela Ticket",
      genere : "Horror"
    },
    {
      id : 3,
      language : "Telugu",
      name: "Abhimanyudu",
      genere : "Thriller"
    }
  ]

}
