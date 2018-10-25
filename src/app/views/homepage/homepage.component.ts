import { Component, OnInit } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { 
  }
  city = ""
  ngOnInit() {
  }
}
