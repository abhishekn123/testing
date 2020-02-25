import { Component, OnInit } from '@angular/core';
import { FreemovieService } from '../freemovie.service';

@Component({
  selector: 'app-restrictedcontent',
  templateUrl: './restrictedcontent.component.html',
  styleUrls: ['./restrictedcontent.component.css']
})
export class RestrictedcontentComponent implements OnInit {

  constructor(private movie :FreemovieService) { }
  freecontent ;
  ngOnInit() {
    this.freecontent = this.movie.freemovie;
  }
}
