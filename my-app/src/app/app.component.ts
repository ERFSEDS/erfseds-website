import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('dropdowncont1') dropdown1Container;
  @ViewChild('dropdowncont2') dropdown2Container;

  sidebar = 'off';
  title = 'my-app';
  dropdown = false;
  index = 0;
  titlebox = true;
  overflow = 'no-overflow'
  mobileOpen = false;

  constructor(private _eref: ElementRef) {
    document.addEventListener('click', this.offClickHandler.bind(this));
  }

  toggleMobileNav() {
    this.mobileOpen = !this.mobileOpen;
  }

  /* Closing Dropdown */
  toggleDropdown() {
    this.dropdown = !this.dropdown;
    if (!this.dropdown) {
      this.titlebox = false;
      setTimeout( ()=> this.titlebox = true, 600)
    }
  }

  /* This function can probably be combined with toggleDropdown */
  offClickHandler(event:any) {
    if (!this.dropdown1Container.nativeElement.contains(event.target) && !this.dropdown2Container.nativeElement.contains(event.target)) {
        this.dropdown = false;
        this.titlebox = false;
        setTimeout( ()=> this.titlebox = true, 600)
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (window.pageYOffset > 300) {
      this.sidebar = 'on';
      setTimeout( ()=> {
        if (window.pageYOffset > 300) {
          this.overflow = 'overflow'
        }
      }, 600)
    } else if (window.pageYOffset <= 300) {
      this.sidebar = 'off';
      this.overflow = 'no-overflow';
    }
  }

}


