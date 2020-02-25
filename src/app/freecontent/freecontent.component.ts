import { Component, OnInit } from '@angular/core';
import { FreemovieService } from '../freemovie.service'

@Component({
  selector: 'app-freecontent',
  templateUrl: './freecontent.component.html',
  styleUrls: ['./freecontent.component.css']
})
export class FreecontentComponent implements OnInit {

  freecontent ;
  constructor(private movie:FreemovieService) 
  { }

  ngOnInit() {
    this.freecontent = this.movie.freemovie;
  }

}
