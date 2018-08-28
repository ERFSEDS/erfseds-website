import { Component, OnInit } from '@angular/core';
import { Project } from '../_models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  projects = [1,2,3,4]

  constructor() { }

  ngOnInit() {
  }

}
