import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sidebar = 'off';
  title = 'my-app';
  dropdown = false;

  constructor() {
  
  }

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (window.pageYOffset > 500) {
      this.sidebar = 'on';
    } else {
      this.sidebar = 'off';
    }
  }

}


