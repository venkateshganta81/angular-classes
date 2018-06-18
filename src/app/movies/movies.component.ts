import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { LoginService } from '../app.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  public ticketsAvailable: any;
  public movieData : any[];
  constructor(
    private loginService: LoginService
  ) { }
  public time;
  ngOnInit() {
    this.observableDemo();
  }

  movies = [
    {
      id: 1,
      language: "Telugu",
      name: "Kaala",
      genere: "Action",
      tickets: "available"
    },
    {
      id: 2,
      language: "Telugu",
      name: "Nela Ticket",
      genere: "Horror",
      tickets: "closed"
    },
    {
      id: 3,
      language: "Telugu",
      name: "Abhimanyudu",
      genere: "Thriller",
      tickets: "closed"
    }
  ]

  observableDemo() {
    this.ticketsAvailable = Observable.interval(1000*1)
      .subscribe(() => this.setAvailability());




    this.time = Observable.interval(1000 * 1)
      .subscribe(() => this.showMovieAvailability());
  }

  public i = 0;
  displayMovie;


  setAvailability() {
    this.movies.forEach((movie) => {
      if (movie.tickets == "closed") {
        movie.tickets = "available";
      } else {
        movie.tickets = "closed";
      }
    })
    console.log(this.movies);
  }



  showMovieAvailability() {
    this.movieData = [];
    this.movies.forEach((movie) => {
      this.movieData.push(movie);
    })
    console.log(this.movieData);
  }

  ngOnDestroy(){
    this.time.unsubscribe();
    this.ticketsAvailable.unsubscribe();
  }

}
