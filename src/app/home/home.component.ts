import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any;
  public searchText: any;

  constructor() { }

  ngOnInit() {
    fetch('./assets/works.json').then(res => res.json())
    .then(json => {
      this.data = json;
      console.log(this.data);
    });
  }

}
