import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'open-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonClick() {
    console.log("Button Clicked");
  }

}
