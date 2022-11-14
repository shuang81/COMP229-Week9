import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;
  showMovieList = false;
  username? : string;



  constructor() { }

  ngOnInit(): void {
  }


  logout(): void{
  }

}
